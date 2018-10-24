import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'game-contact',
  templateUrl: './game-contact.component.html',
  styleUrls: ['./game-contact.component.scss']
})
export class GameContactComponent implements OnInit {
  @Output() clicked = new EventEmitter();

  ngOnInit() { }
  copyText(text) {
    this.clicked.emit(text);
  }

}
