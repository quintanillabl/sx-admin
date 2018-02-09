import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { CobrosPageComponent } from './container/cobros-page/cobros-page.component';
import { SharedModule } from 'app/_shared/shared.module';


@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild([])
  ],
  declarations: [CobrosPageComponent]
})
export class CobrosModule { }
