import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '../../../node_modules/@angular/forms';

@Component({
  selector: 'contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  name = new FormControl('', [Validators.required]);
  email = new FormControl('', [Validators.required, Validators.email]);
  note = new FormControl('');
  constructor() { }

  ngOnInit() {
  }

}
