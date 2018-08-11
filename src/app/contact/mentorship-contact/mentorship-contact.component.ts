import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'mentorship-contact',
  templateUrl: './mentorship-contact.component.html',
  styleUrls: ['./mentorship-contact.component.css']
})
export class MentorshipContactComponent implements OnInit {
  @Output() clicked = new EventEmitter();

  ngOnInit() { }
  copyText(text) {
    this.clicked.emit(text);
  }


}
