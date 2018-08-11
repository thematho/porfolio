import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule, DomSanitizer } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { LayoutModule } from '@angular/cdk/layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  MatSidenavModule,
  MatSliderModule,
  MatButtonModule,
  MatToolbarModule,
  MatListModule,
  MatIconModule,
  MatFormFieldModule,
  MatCardModule,
  MatInputModule,
  MatProgressSpinnerModule,
  MatTooltipModule,
  MatIconRegistry
} from '@angular/material';
import { AppComponent } from './app.component';
import { MathoHeaderComponent } from './matho-header/matho-header.component';
import { HomeComponent } from './home/home.component';
import { appRoutes } from './app.routes';
import { AboutComponent } from './about/about.component';
import { PorfolioComponent } from './porfolio/porfolio.component';
import { ColdWindowComponent } from './porfolio/cold-window/cold-window.component';
import { ContactComponent } from './contact/contact.component';
import { LoadingOverlayComponent } from './loading-overlay/loading-overlay.component';
import { BusinessContactComponent } from './contact/business-contact/business-contact.component';
import { GameContactComponent } from './contact/game-contact/game-contact.component';
import { MentorshipContactComponent } from './contact/mentorship-contact/mentorship-contact.component';

@NgModule({
  declarations: [
    AppComponent,
    MathoHeaderComponent,
    HomeComponent,
    AboutComponent,
    PorfolioComponent,
    ColdWindowComponent,
    ContactComponent,
    LoadingOverlayComponent,
    BusinessContactComponent,
    GameContactComponent,
    MentorshipContactComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatIconModule,
    LayoutModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSliderModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatCardModule,
    MatProgressSpinnerModule,
    MatTooltipModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(matIconRegistry: MatIconRegistry, domSanitizer: DomSanitizer) {
    matIconRegistry.addSvgIconSet(domSanitizer.bypassSecurityTrustResourceUrl('./assets/mdi.svg'));
    matIconRegistry.addSvgIconSet(domSanitizer.bypassSecurityTrustResourceUrl('./assets/steam.svg'));
    matIconRegistry.addSvgIconSet(domSanitizer.bypassSecurityTrustResourceUrl('./assets/nintendo-switch.svg'));
    matIconRegistry.addSvgIconSet(domSanitizer.bypassSecurityTrustResourceUrl('./assets/google-hangouts.svg'));
  }
}
