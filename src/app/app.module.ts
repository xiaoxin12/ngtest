import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {Demo3Module} from './demo3/demo3.module';
// import {Demo3Component} from './demo3/demo3.component';
import { Demo4Component } from './demo4/demo4.component'
@NgModule({
  declarations: [
    AppComponent,
    Demo4Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    Demo3Module
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
