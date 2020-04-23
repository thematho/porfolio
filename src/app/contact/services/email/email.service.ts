import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmailService {
  readonly destination: string = 'thematho@gmail.com';
  readonly service_id: string = "default_service";
  readonly template_id: string = "template_N6IOcP7q";
  emailjs = window['emailjs'];

  sendEmail(emailInfo: any): PromiseLike<Object> {
    let template_params = {
      'reply_to ': emailInfo.email,
      'from_name ': emailInfo.name,
      'message_html': emailInfo.note
    }

    return this.emailjs.send(this.service_id, this.template_id, template_params);
  }

  constructor() { }
}
