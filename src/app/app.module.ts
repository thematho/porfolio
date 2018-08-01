import { RouterModule } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { VendorsModule } from "./vendors/vendors.module";
import { LayoutModule } from '@angular/cdk/layout';
import { MathoHeaderComponent } from './matho-header/matho-header.component';
import { HomeComponent } from './home/home.component';
import { MatSidenavModule, MatButtonModule, MatToolbarModule, MatListModule, MatIconModule } from '@angular/material';
import appRoutes from './app.routes';
import { AboutComponent } from './about/about.component';
import { PorfolioComponent } from './porfolio/porfolio.component';

@NgModule({
  declarations: [
    AppComponent,
    MathoHeaderComponent,
    HomeComponent,
    AboutComponent,
    PorfolioComponent,
  ],
  imports: [
    BrowserModule, 
    BrowserAnimationsModule,
    LayoutModule,
    VendorsModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatCardModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
