import {BrowserModule} from '@angular/platform-browser';
import {CommonModule} from '@angular/common';

import {NgModule} from '@angular/core';

import {MaterialModule} from '@angular/material';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';

import {AppComponent} from './app.component';
import {LoginComponent} from './login/login.component';
import {AppRoutingModule} from './app-routing.module';
import {ProjectComponent} from './project/project.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ProjectComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    NoopAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule {
}
