import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ModuleRouting } from './contact.routes';
import { ContactComponent } from './contact.component';
import { BusinessContactComponent } from './business-contact/business-contact.component';
import { GameContactComponent } from './game-contact/game-contact.component';
import { MentorshipContactComponent } from './mentorship-contact/mentorship-contact.component';
import {
  MatSliderModule,
  MatButtonModule,
  MatCardModule,
  MatIconModule,
  MatInputModule,
} from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    ModuleRouting,
    FormsModule,
    ReactiveFormsModule,
    MatSliderModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule,
  ],
  declarations: [
    ContactComponent,
    BusinessContactComponent,
    GameContactComponent,
    MentorshipContactComponent,
  ]
})
export class ContactModule { }
