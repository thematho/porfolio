import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { LayoutModule } from '@angular/cdk/layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSidenavModule, MatButtonModule, MatToolbarModule, MatListModule, MatIconModule, MatFormFieldModule, MatCardModule, MatInputModule } from '@angular/material';
import { AppComponent } from './app.component';
import { MathoHeaderComponent } from './matho-header/matho-header.component';
import { HomeComponent } from './home/home.component';
import { appRoutes } from './app.routes';
import { AboutComponent } from './about/about.component';
import { PorfolioComponent } from './porfolio/porfolio.component';
import { ColdWindowComponent } from './porfolio/cold-window/cold-window.component';
import { ContactComponent } from './contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    MathoHeaderComponent,
    HomeComponent,
    AboutComponent,
    PorfolioComponent,
    ColdWindowComponent,
    ContactComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    LayoutModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
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
