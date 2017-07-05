import {NgModule} from '@angular/core';

import {Routes, RouterModule} from '@angular/router';
import {MaterialModule} from '@angular/material';

import {CategoryComponent} from './category.component';

const route: Routes = [
  {
    path: '', component: CategoryComponent
  }
];

@NgModule({
  declarations: [
    CategoryComponent
  ],
  imports: [
    RouterModule.forChild(route),
    MaterialModule
  ]
})

export class CategoryModule{}
