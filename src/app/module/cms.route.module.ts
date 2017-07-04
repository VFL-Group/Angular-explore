import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {CmsComponent} from './cms.component';
import {HomeComponent} from './view/home/home.component';

const CmsRoutes: Routes = [
  {
    path: '', component: CmsComponent, children: [
    {path: '', redirectTo: 'home'},
    {path: 'home', component: HomeComponent},
    {path: 'product', loadChildren: './view/product/product.module#ProductModule'},
    {path: 'form', loadChildren: './view/form/form.module#FormModule'},
    {path: 'category', loadChildren: './view/category/category.module#CategoryModule'}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(CmsRoutes)],
  exports: [RouterModule],
})
export class CmsRoutingModule {
}
