import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Demo2Component } from './demo2.component';
import {Demo1Module} from '../demo1/demo1.module'


@NgModule({
  declarations: [Demo2Component],
  imports: [
    CommonModule,
    Demo1Module
  ],
  exports: [Demo2Component]
})
export class Demo2Module { }
