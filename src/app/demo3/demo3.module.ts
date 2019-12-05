import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Demo3Component } from './demo3.component';

import {Demo1Module} from '../demo1/demo1.module'
import {Demo2Module} from '../demo2/demo2.module'

@NgModule({
  declarations: [Demo3Component],
  imports: [
    CommonModule,
    Demo2Module,
    Demo1Module
  ],
  exports: [Demo3Component]
})
export class Demo3Module { }
