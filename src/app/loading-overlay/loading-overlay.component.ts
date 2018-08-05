import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'loading-overlay',
  templateUrl: './loading-overlay.component.html',
  styleUrls: ['./loading-overlay.component.css']
})
export class LoadingOverlayComponent implements OnInit {
  color: string = 'primary';
  mode: string = 'indeterminate';
  value: number = 0;

  constructor() { }

  ngOnInit() {
  }

}
