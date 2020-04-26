import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { PorfolioComponent } from './porfolio.component';
import { ColdWindowComponent } from './cold-window/cold-window.component';
import { RoutingModule } from './routing/routing.module';


@NgModule({
  declarations: [
    PorfolioComponent,
    ColdWindowComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatIconModule,
    RoutingModule
  ],
  exports: [
    PorfolioComponent,
    ColdWindowComponent,
  ]
})
export class PorfolioModule { }
