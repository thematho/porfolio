import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  assetsAuthors: { name: string; link: string; }[];

  constructor() {
    this.assetsAuthors = [{
      name: 'Erik Ragnar Eliasson',
      link: 'https://www.iconfinder.com/Sennerstad',
    },{ 
      name: 'Freeimages',
      link: 'http://www.freeimages.co.uk',
    }];

  }

  ngOnInit() {

  }

}
