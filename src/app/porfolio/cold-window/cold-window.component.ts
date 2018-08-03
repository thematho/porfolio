import { Component, OnInit, ViewChild, ElementRef, Renderer } from '@angular/core';


@Component({
  selector: 'cold-window',
  templateUrl: './cold-window.component.html',
  styleUrls: ['./cold-window.component.css']
})
export class ColdWindowComponent implements OnInit {
  @ViewChild('window') canvas: ElementRef;
  private _image: HTMLImageElement;
  private _radius: number;
  private _renderer: Renderer;
  _context: any;
  _lastCoord: { x: number; y: number; };
  private readonly imgUrl = '/assets/winter.jpg'
  private readonly lineWidth: number = 65;
  private readonly radius: number = 80;

  constructor(renderer: Renderer) {
    this._image = new Image();
    this._radius = this.radius;
    this._renderer = renderer;
  }

  ngOnInit() {
    let canvas = this.canvas.nativeElement;
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    this._context = canvas.getContext('2d');
    this._context.filter = 'blur(10px)';

    this._image.onload = () => {
      this._renderer.listen(canvas, 'mousemove', this.onMove.bind(this));
      this._renderer.listen(canvas, 'touchmove', this.onMove.bind(this));
      this.drawImage();
      canvas.style = `background-image: url('${this.imgUrl}');`

    };
    this._image.src = this.imgUrl;
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
    this._lastCoord = coord;
  }

  private cleanWindow(coord) {
    this._context.beginPath();
    if (this._lastCoord) {
      this._context.lineWidth = this.lineWidth;
      this._context.beginPath();
      this._context.moveTo(this._lastCoord.x, this._lastCoord.y);
      this._context.lineTo(coord.x, coord.y);
      this._context.stroke();
    }
    this._context.arc(coord.x, coord.y, this._radius, 0, 2 * Math.PI);

    this._context.closePath();
    this._context.fill();
  }

  private drawImage() {
    this._context.drawImage(this._image,
      0, 0, this._image.width, this._image.height,
      0, 0, this.canvas.nativeElement.width, this.canvas.nativeElement.height);
    this._context.globalCompositeOperation = 'destination-out';
  }

  refresh() {
    this._context.globalCompositeOperation = 'source-over';
    this.drawImage();
  }

}
