import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ArrayformRoutingModule } from './arrayform-routing.module';
import { ArrayformComponent } from './arrayform.component';


@NgModule({
  declarations: [
    ArrayformComponent
  ],
  imports: [
    CommonModule,
    ArrayformRoutingModule
  ]
})
export class ArrayformModule { }
