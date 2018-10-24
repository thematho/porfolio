import { Component, ViewChild } from '@angular/core';
import { MatSidenav } from '../../node_modules/@angular/material';
import { OverlayService } from './overlay.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [OverlayService],
})
export class AppComponent {
  @ViewChild('sidenav') sidenav: MatSidenav;
  title = 'app';
  processing = false;
  subscription: any;

  constructor(overlayService: OverlayService) {
    this.subscription = overlayService.toggleSource$.subscribe(
      flag => {
        this.processing = flag;
      });
  }
  toggleNav() {
    this.sidenav.toggle();
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
