import {Component, OnInit} from '@angular/core';
import data from './category.json';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})

export class CategoryComponent implements OnInit {
  constructor() {
  }

  ngOnInit() {
    console.log('data',data);
  }

}
