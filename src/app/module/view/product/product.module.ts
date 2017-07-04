import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {ProductComponent} from './product.component';

const route: Routes = [
  {
    path: '', component: ProductComponent
  }
];


@NgModule({
  declarations: [
    ProductComponent
  ],
  imports: [
    RouterModule.forChild(route)
  ]
})

export class ProductModule {}
