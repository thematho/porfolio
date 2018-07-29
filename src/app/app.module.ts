import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { VendorsModule } from './vendors/vendors.module';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule } from '@angular/material';
import { MathoHeaderComponent } from './matho-header/matho-header.component';
import { ThanksComponent } from './thanks/thanks.component';

@NgModule({
  declarations: [
    AppComponent,
    MathoHeaderComponent,
    ThanksComponent,
  ],
  imports: [
    BrowserModule, 
    BrowserAnimationsModule,
    VendorsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
