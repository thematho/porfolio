import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { PresentationCardComponent } from './presentation-card/presentation-card.component';
import { MatCardModule } from '@angular/material';
@NgModule({
  imports: [
    CommonModule,
    MatCardModule,
  ],
  declarations: [
    HomeComponent,
    PresentationCardComponent,
  ]
})
export class HomeModule { }
