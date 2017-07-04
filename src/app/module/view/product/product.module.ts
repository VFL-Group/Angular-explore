import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import { MaterialModule } from '@angular/material';

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
    RouterModule.forChild(route),
    MaterialModule
  ]
})

export class ProductModule {}
