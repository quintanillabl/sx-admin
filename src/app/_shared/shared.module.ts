import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MaterialModule } from './_material/material.module';
import { CovalentModule } from './_covalent/covalent.module';
import {RouterModule} from '@angular/router';
import { PageFooterComponent } from './pages/page-footer/page-footer.component';
import { SxNavListComponent } from './layout/sx-nav-list/sx-nav-list.component';
import { OnlyNumbersDirective } from './directives/only-numbers.directive';
import { ToUpperCaseDirective } from './directives/to-upper-case.directive';
import { ThemeSelectorComponent } from './components/theme-selector/theme-selector.component';


@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forChild([]),
    MaterialModule,
    CovalentModule,
  ],
  declarations: [PageFooterComponent, SxNavListComponent, OnlyNumbersDirective, ToUpperCaseDirective, ThemeSelectorComponent],
  exports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    MaterialModule,
    CovalentModule,
    PageFooterComponent,
    SxNavListComponent,
    OnlyNumbersDirective,
    ToUpperCaseDirective,
  ]
})
export class SharedModule { }
