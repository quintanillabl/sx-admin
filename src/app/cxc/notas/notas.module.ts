import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { NotascxcPageComponent } from './notascxc-page/notascxc-page.component';
import { SharedModule } from 'app/_shared/shared.module';
import { NotacxcCreatePageComponent } from './notacxc-create-page/notacxc-create-page.component';
import { CxcnotasGridComponent } from './_components/cxcnotas-grid/cxcnotas-grid.component';
import { CxcnotaFormComponent } from './_components/cxcnota-form/cxcnota-form.component';
import { ClientesModule } from 'app/clientes/clientes.module';

import { CurrencyMaskModule } from "ng2-currency-mask";
import { SelectorDeRmdComponent } from './_components/selector-de-rmd/selector-de-rmd.component';
import { CxcfacturasGridComponent } from './_components/cxcnota-form/cxcfacturas-grid/cxcfacturas-grid.component';
import { RmdPanelComponent } from './_components/cxcnota-form/rmd-panel/rmd-panel.component';

@NgModule({
  imports: [
    SharedModule,
    ClientesModule,
    RouterModule.forChild([]),
    CurrencyMaskModule,
  ],
  declarations: [NotascxcPageComponent, NotacxcCreatePageComponent, CxcnotasGridComponent, CxcnotaFormComponent, SelectorDeRmdComponent, CxcfacturasGridComponent, RmdPanelComponent]
})
export class NotasModule { }
