import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { NotascxcPageComponent } from './notascxc-page/notascxc-page.component';
import { SharedModule } from 'app/_shared/shared.module';
import { NotacxcCreatePageComponent } from './notacxc-create-page/notacxc-create-page.component';
import { CxcnotasGridComponent } from './_components/cxcnotas-grid/cxcnotas-grid.component';
import { CxcnotaFormComponent } from './_components/cxcnota-form/cxcnota-form.component';

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild([])
  ],
  declarations: [NotascxcPageComponent, NotacxcCreatePageComponent, CxcnotasGridComponent, CxcnotaFormComponent]
})
export class NotasModule { }
