import { Component, OnInit, ViewChild, ElementRef, Renderer2 } from '@angular/core';


@Component({
  selector: 'cold-window',
  templateUrl: './cold-window.component.html',
  styleUrls: ['./cold-window.component.scss']
})
export class ColdWindowComponent implements OnInit {
  @ViewChild('window', {static: true, read: ElementRef}) canvas: ElementRef;

  private image: HTMLImageElement;
  private renderer: Renderer2;
  private context: any;
  private lastCoord: { x: number; y: number; };
  private readonly imgUrl: string = '/assets/winter.jpg'
  private readonly lineWidth: number = 100  ;
  private readonly radius: number = 120;

  constructor(renderer: Renderer2) {
    this.image = new Image();
    this.radius = this.radius;
    this.renderer = renderer;
  }

  ngOnInit() {
    let canvas = this.canvas.nativeElement;
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    this.context = canvas.getContext('2d');
    this.context.filter = 'blur(10px)';

    this.image.onload = () => {
      this.renderer.listen(canvas, 'mousemove', this.onMove.bind(this));
      this.renderer.listen(canvas, 'touchmove', this.onMove.bind(this));
      this.drawImage();
      canvas.style = `background-image: url('${this.imgUrl}');`

    };
    this.image.src = this.imgUrl;
  }
  private onMove(e: any) {
    let r = this.canvas.nativeElement.getBoundingClientRect(),
      scaleX = this.canvas.nativeElement.width / r.width,
      scaleY = this.canvas.nativeElement.height / r.height
    let coord = {
      x: ((e.type === 'mousemove' ? e.clientX : e.touches[0].clientX) - r.left) * scaleX,
      y: ((e.type === 'mousemove' ? e.clientY : e.touches[0].clientY) - r.top) * scaleY
    };
    this.cleanWindow(coord);
    this.lastCoord = coord;
  }

  private cleanWindow(coord) {
    this.context.beginPath();
    if (this.lastCoord) {
      this.context.lineWidth = this.lineWidth;
      this.context.beginPath();
      this.context.moveTo(this.lastCoord.x, this.lastCoord.y);
      this.context.lineTo(coord.x, coord.y);
      this.context.stroke();
    }
    this.context.arc(coord.x, coord.y, this.radius, 0, 2 * Math.PI);

    this.context.closePath();
    this.context.fill();
  }

  private drawImage() {
    this.context.drawImage(this.image,
      0, 0, this.image.width, this.image.height,
      0, 0, this.canvas.nativeElement.width, this.canvas.nativeElement.height);
    this.context.globalCompositeOperation = 'destination-out';
  }

  refresh() {    
    this.context.globalCompositeOperation = 'source-over';
    this.drawImage();
  }

}
