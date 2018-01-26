import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { CreditoPageComponent } from './credito-page/credito-page.component';
import { SharedModule } from 'app/_shared/shared.module';
import { ClientePageComponent } from './cliente-page/cliente-page.component';


@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild([])
  ],
  declarations: [CreditoPageComponent, ClientePageComponent]
})
export class CarteraModule { }
