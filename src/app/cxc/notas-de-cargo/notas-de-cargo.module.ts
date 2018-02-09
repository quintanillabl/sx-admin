import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'app/_shared/shared.module';
import { NotasDeCargoPageComponent } from './container/notas-de-cargo-page/notas-de-cargo-page.component';
import { NotaDeCargoCreateComponent } from './container/nota-de-cargo-create.component';
import { NotadecargoFormComponent } from './components/notadecargo-form/notadecargo-form.component';
import { ClientesModule } from 'app/clientes/clientes.module';
import { NotasdecargoPartidasComponent } from './components/notasdecargo-partidas/notasdecargo-partidas.component';


@NgModule({
  imports: [
    SharedModule,
    ClientesModule,
    RouterModule
  ],
  declarations: [NotasDeCargoPageComponent, NotaDeCargoCreateComponent, NotadecargoFormComponent, NotasdecargoPartidasComponent]
})
export class NotasDeCargoModule { }
