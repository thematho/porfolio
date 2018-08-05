import { OverlayService } from './../overlay.service';
import { EmailService } from './email.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  contactForm: FormGroup;
  cardIndex: number = 1;
  private emailService: EmailService;
  overlayService: OverlayService;

  constructor(formBuilder: FormBuilder, emailService: EmailService, overlayService: OverlayService) {
    this.contactForm = formBuilder.group({
      'name': new FormControl('', [Validators.required]),
      'email': new FormControl('', [Validators.required, Validators.email]),
      'note': new FormControl(''),
    })
    this.emailService = emailService;
    this.overlayService = overlayService;
  }

  ngOnInit() {
  }

  getSliderIconText(v) {
    return v ? 'email' : 'videogame_asset';
  }

  sendEmail() {
    if (this.contactForm.valid) {
      this.overlayService.toggleOverlay(true);
      this.emailService
        .sendEmail({
          name: this.contactForm.get('name').value,
          email: this.contactForm.get('email').value,
          note: this.contactForm.get('note').value,
        })
        .then((response: { status: number, text: string }) => {
          console.log(response.status, response.text);
          this.overlayService.toggleOverlay(false);
        }, (err) => {
          console.log(err.status, err.text);
          this.overlayService.toggleOverlay(false);
        });
    }
  }

}
