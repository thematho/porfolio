import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ContactComponent } from './contact.component';
import { BusinessContactComponent } from './business-contact/business-contact.component';
import { GameContactComponent } from './game-contact/game-contact.component';
import { MentorshipContactComponent } from './mentorship-contact/mentorship-contact.component';
import { MatSliderModule } from '@angular/material/slider';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { RoutingModule } from './routing/routing.module';


@NgModule({
  imports: [
    CommonModule,
    RoutingModule,
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
