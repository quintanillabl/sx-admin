import { NgModule } from '@angular/core';

import { SharedModule } from 'app/_shared/shared.module';
import { CxcRoutingModule } from './cxc-routing.module';
import { CxcPageComponent } from './cxc-page/cxc-page.component';
import { NotasModule } from './notas/notas.module';
import { NotascxcService } from 'app/cxc/services/notascxc.service';


@NgModule({
  imports: [
    SharedModule,
    NotasModule,
    CxcRoutingModule
  ],
  declarations: [CxcPageComponent],
  providers: [NotascxcService]
})
export class CxcModule { }
