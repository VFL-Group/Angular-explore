import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {CmsRoutingModule} from './cms.route.module';
import {MaterialModule} from '@angular/material';

import {CmsComponent} from './cms.component';
import {HomeComponent} from './view/home/home.component';
import {NavBarComponent} from './view/nav/navbar/navbar.component';

@NgModule({
  declarations: [
    CmsComponent,
    HomeComponent,
    NavBarComponent
  ],
  imports: [
    CommonModule,
    CmsRoutingModule,
    MaterialModule
  ]
})

export class CmsModule {}
