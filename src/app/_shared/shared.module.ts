import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MaterialModule } from './_material/material.module';
import { CovalentModule } from './_covalent/covalent.module';
import {RouterModule} from '@angular/router';
import { PageFooterComponent } from './pages/page-footer/page-footer.component';
import { SxNavListComponent } from './layout/sx-nav-list/sx-nav-list.component';


@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forChild([]),
    MaterialModule,
    CovalentModule,
  ],
  declarations: [PageFooterComponent, SxNavListComponent],
  exports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    MaterialModule,
    CovalentModule,
    PageFooterComponent,
    SxNavListComponent,
  ]
})
export class SharedModule { }
