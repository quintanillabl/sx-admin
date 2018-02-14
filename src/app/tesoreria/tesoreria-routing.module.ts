import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TesoreriaMainPageComponent } from './tesoreria-main-page/tesoreria-main-page.component';
import { AutorizacionDepositosPageComponent } from './pages/autorizacion-depositos-page/autorizacion-depositos-page.component';
import { AutorizacionesShowComponent } from './components/autorizaciones-show/autorizaciones-show.component';
import { SolicitudesAutorizadasComponent } from './pages/solicitudes-autorizadas/solicitudes-autorizadas.component';
import { CobrosListComponent } from './cobros/container/cobros-list/cobros-list.component';

const routes: Routes = [
  {
    path: '',
    component: TesoreriaMainPageComponent,
    children: [
      {
        path: 'autorizaciones',
        component: AutorizacionDepositosPageComponent
      },
      {
        path: 'autorizaciones/show/:id',
        component: AutorizacionesShowComponent
      },
      { path: 'autorizados', component: SolicitudesAutorizadasComponent},
      { path: 'cobros', component: CobrosListComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TesoreriaRoutingModule { }
