import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClassToggleDirective } from './class-toggle.directive';

@NgModule({
  declarations: [
    ClassToggleDirective
  ],
  exports: [
    CommonModule,
    ClassToggleDirective
  ]
})
export class SharedModule { }
