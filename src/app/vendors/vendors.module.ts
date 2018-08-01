import { NgModule } from '@angular/core';
import { MatToolbarModule, MatButtonModule, MatIconModule, MatListModule } from '@angular/material';
import { MatCardModule} from  '@angular/material/card';
import { MatSidenavModule } from '@angular/material/sidenav';

@NgModule({
  imports: [
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatCardModule,
  ],
  declarations: []
})
export class VendorsModule { }
