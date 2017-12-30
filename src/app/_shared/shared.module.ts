import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MaterialModule } from './_material/material.module';
import { CovalentModule } from './_covalent/covalent.module';
import {RouterModule} from '@angular/router';
import { PageFooterComponent } from './pages/page-footer/page-footer.component';


@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    MaterialModule,
    CovalentModule,
  ],
  declarations: [PageFooterComponent],
  exports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    MaterialModule,
    CovalentModule,
    PageFooterComponent
  ]
})
export class SharedModule { }
