import {ModuleWithProviders, NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientesRoutingModule } from './clientes-routing.module';
import { ClienteService } from './services/cliente.service';

@NgModule({
  imports: [
    CommonModule,
    ClientesRoutingModule
  ],
  declarations: []
})
export class ClientesModule {

  static forRoot(): ModuleWithProviders {
    return {
      ngModule: ClientesModule,
      providers: [ ClienteService ]
    };
  }
}
