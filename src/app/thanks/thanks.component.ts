import { Component, OnInit } from '@angular/core';
import { ArrayType } from '../../../node_modules/@angular/compiler/src/output/output_ast';

@Component({
  selector: 'thanks',
  templateUrl: './thanks.component.html',
  styleUrls: ['./thanks.component.css']
})
export class ThanksComponent implements OnInit {
  assetsAuthors: { name: string; link: string; }[];

  constructor() {
    this.assetsAuthors = [{
      name: 'Erik Ragnar Eliasson',
      link: 'https://www.iconfinder.com/Sennerstad',
    }];
  }

  ngOnInit() {
  }

}
