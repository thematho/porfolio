import { Component, ViewChild } from '@angular/core';
import { MatSidenav } from '../../node_modules/@angular/material';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('sidenav') sidenav: MatSidenav;
  title = 'app';

  toggleNav() {
    this.sidenav.toggle();
  }
}
