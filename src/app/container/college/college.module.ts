import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CollegeRoutingModule } from './college-routing.module';
import { DisplayComponent } from './display/display.component';


@NgModule({
  declarations: [
  
  
    DisplayComponent
  ],
  imports: [
    CommonModule,
    CollegeRoutingModule
  ]
})
export class CollegeModule { }
