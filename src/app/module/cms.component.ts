import {Component, OnInit} from '@angular/core';

import {Nav} from '../models/nav';

@Component({
  selector: 'app-cms',
  templateUrl: './cms.component.html',
  styleUrls: ['./cms.component.css']
})

export class CmsComponent implements OnInit {
  private cms: boolean;
  private navs: Nav[];

  constructor() {
    this.navs = [
      {name: 'home', url: 'home'},
      {name: 'product', url: 'product'},
      {name: 'form', url: 'form'}
    ];
  }

  ngOnInit() {
    this.cms = true;
  }

}
