import { Component, Output, OnInit, EventEmitter } from '@angular/core';

@Component({
  selector: 'matho-header',
  templateUrl: './matho-header.component.html',
  styleUrls: ['./matho-header.component.css']
})
export class MathoHeaderComponent {
  @Output()
  toggleMenuEmitter = new EventEmitter();

  menuClick() {
    this.toggleMenuEmitter.emit();
  }
}
