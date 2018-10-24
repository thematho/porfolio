import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  cardIndex: number = 2;
  
  ngOnInit() {}
  
  getSliderIconText(v) {
    const iconMap = {
      0: 'videogame_asset',
      1: 'supervisor_account',
      2: 'email',
    }
    return iconMap[v];
  }

  copyText(value) {
    let selBox = document.createElement('textarea');
    selBox.style.position = 'fixed';
    selBox.style.left = '0';
    selBox.style.top = '0';
    selBox.style.opacity = '0';
    selBox.value = value;
    document.body.appendChild(selBox);
    selBox.focus();
    selBox.select();
    document.execCommand('copy');
    document.body.removeChild(selBox);
  }

}
