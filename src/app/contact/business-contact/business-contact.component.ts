import { Component, OnInit } from '@angular/core';
import { OverlayService } from './../../overlay.service';
import { EmailService } from '../services/email/email.service';
import { UntypedFormControl, Validators, UntypedFormGroup, UntypedFormBuilder } from '@angular/forms';
@Component({
  selector: 'business-contact',
  templateUrl: './business-contact.component.html',
  styleUrls: ['./business-contact.component.scss']
})
export class BusinessContactComponent implements OnInit {
  contactForm: UntypedFormGroup;
  private emailService: EmailService;
  overlayService: OverlayService;

  constructor(formBuilder: UntypedFormBuilder, emailService: EmailService, overlayService: OverlayService) {
    this.contactForm = formBuilder.group({
      'name': new UntypedFormControl('', [Validators.required]),
      'email': new UntypedFormControl('', [Validators.required, Validators.email]),
      'note': new UntypedFormControl(''),
    })
    this.emailService = emailService;
    this.overlayService = overlayService;
  }
  
  ngOnInit() { }

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
