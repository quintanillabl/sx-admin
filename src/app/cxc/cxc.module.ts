import { NgModule } from '@angular/core';

import { SharedModule } from 'app/_shared/shared.module';
import { CxcRoutingModule } from './cxc-routing.module';
import { CxcPageComponent } from './cxc-page/cxc-page.component';
import { NotasModule } from './notas/notas.module';
import { NotascxcService } from 'app/cxc/services/notascxc.service';
import { CarteraModule } from 'app/cxc/cartera/cartera.module';
import { ClientePageResolver } from 'app/cxc/cartera/cliente-page/cliente-page.resolver';
import { SolicitudesModule } from 'app/cxc/solicitudes/solicitudes.module';


@NgModule({
  imports: [
    SharedModule,
    NotasModule,
    CarteraModule,
    CxcRoutingModule,
    SolicitudesModule
  ],
  declarations: [CxcPageComponent],
  providers: [NotascxcService, ClientePageResolver]
})
export class CxcModule { }
