import {ModuleWithProviders, NgModule} from '@angular/core';


import { ClientesRoutingModule } from './clientes-routing.module';
import { ClienteService } from './services/cliente.service';
import { ClienteFieldComponent } from './_components/cliente-field/cliente-field.component';
import { SharedModule } from 'app/_shared/shared.module';
import { ClienteSelectorComponent } from './_components/cliente-selector/cliente-selector.component';

@NgModule({
  imports: [
    SharedModule,
    ClientesRoutingModule
  ],
  declarations: [ClienteFieldComponent, ClienteSelectorComponent],
  exports: [ClienteFieldComponent, ClienteSelectorComponent]
})
export class ClientesModule {

  static forRoot(): ModuleWithProviders {
    return {
      ngModule: ClientesModule,
      providers: [ ClienteService ]
    };
  }
}
