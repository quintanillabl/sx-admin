import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TesoreriaMainPageComponent } from './tesoreria-main-page/tesoreria-main-page.component';
import { AutorizacionDepositosPageComponent } from './pages/autorizacion-depositos-page/autorizacion-depositos-page.component';
import { AutorizacionesShowComponent } from './components/autorizaciones-show/autorizaciones-show.component';
import { SolicitudesAutorizadasComponent } from './pages/solicitudes-autorizadas/solicitudes-autorizadas.component';

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
      { path: 'autorizados',component: SolicitudesAutorizadasComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TesoreriaRoutingModule { }
