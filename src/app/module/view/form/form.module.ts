import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {FormsModule} from '@angular/forms';
import {Routes, RouterModule} from '@angular/router';
import {MaterialModule} from '@angular/material';

import {FormComponent} from './form.component';

const route: Routes = [
  {
    path: '', component: FormComponent
  }
];


@NgModule({
  declarations: [
    FormComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(route),
    MaterialModule,
    FormsModule
  ]
})

export class FormModule {
}

