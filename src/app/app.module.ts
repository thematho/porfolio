import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule, DomSanitizer } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { LayoutModule } from '@angular/cdk/layout';

import { AppComponent } from './app.component';
import { MathoHeaderComponent } from './shared/components/matho-header/matho-header.component';
import { ModuleRouting } from './app.routes';
import { AboutComponent } from './about/about.component';
import { ColdWindowComponent } from './porfolio/cold-window/cold-window.component';
import { HomeModule } from './home/home.module';
import { ContactModule } from './contact/contact.module';
import { VendorsModule } from './vendors/vendors.module';
import { MatIconRegistry } from '@angular/material/icon';

@NgModule({
  declarations: [
    AppComponent,
    MathoHeaderComponent,
    AboutComponent,
    ColdWindowComponent,
  ],
  imports: [
    HomeModule,
    ContactModule,
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    LayoutModule,
    VendorsModule,
    ModuleRouting,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(matIconRegistry: MatIconRegistry, domSanitizer: DomSanitizer) {
    matIconRegistry.addSvgIconSet(domSanitizer.bypassSecurityTrustResourceUrl('./assets/icons/mdi.svg'));
    matIconRegistry.addSvgIconSet(domSanitizer.bypassSecurityTrustResourceUrl('./assets/icons/steam.svg'));
    matIconRegistry.addSvgIconSet(domSanitizer.bypassSecurityTrustResourceUrl('./assets/icons/nintendo-switch.svg'));
    matIconRegistry.addSvgIconSet(domSanitizer.bypassSecurityTrustResourceUrl('./assets/icons/google-hangouts.svg'));
  }
}
