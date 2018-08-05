import { Injectable } from '@angular/core';
import { Subject } from '../../node_modules/rxjs';

@Injectable({
  providedIn: 'root'
})
export class OverlayService {
  private toggleSource = new Subject<boolean>();
  toggleSource$ = this.toggleSource.asObservable();

  toggleOverlay(flag: boolean) {
    this.toggleSource.next(flag);
  }
}
