import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CxcPageComponent } from './cxc-page/cxc-page.component';
import { NotascxcPageComponent } from './notas/notascxc-page/notascxc-page.component';
import { NotacxcCreatePageComponent } from 'app/cxc/notas/notacxc-create-page/notacxc-create-page.component';
import { DevolucionesComponent } from 'app/cxc/notas/devoluciones/devoluciones.component';
import { BonificacionesComponent } from 'app/cxc/notas/bonificaciones/bonificaciones.component';
import { CreditoPageComponent } from 'app/cxc/cartera/credito-page/credito-page.component';
import { NotaViewComponent } from 'app/cxc/notas/_components/nota-view/nota-view.component';
import { BonificacionesCreateComponent } from 'app/cxc/notas/bonificaciones/bonificaciones-create.component';
import { ClientePageComponent } from 'app/cxc/cartera/cliente-page/cliente-page.component';
import { ClientePageResolver } from 'app/cxc/cartera/cliente-page/cliente-page.resolver';
import { ClienteInfoPageComponent } from 'app/cxc/cartera/cliente-info-page/cliente-info-page.component';
import { EstadoCuentaComponent } from 'app/cxc/cartera/estado-cuenta/estado-cuenta.component';
import { ClienteCobrosComponent } from 'app/cxc/cartera/cliente-cobros/cliente-cobros.component';
import { SolicitudesPageComponent } from 'app/cxc/solicitudes/container/solicitudes-page/solicitudes-page.component';

const routes: Routes = [
  {
    path: '', 
    component: CxcPageComponent,
    children: [
      {
        path: 'notas',
        component: NotascxcPageComponent,
        children: [
          {path: 'devoluciones', component: DevolucionesComponent},
          {path: 'devoluciones/show/:id', component: NotaViewComponent},
          {path: 'bonificaciones', component: BonificacionesComponent},
          {
            path: 'bonificaciones/create',
            component: BonificacionesCreateComponent,
            data: {tipoCartera: 'CRE'}
          }, {
            path: 'bonificaciones/show/:id',
            component: NotaViewComponent
          }
        ]
      },
      {
        path: 'notas/create',
        component: NotacxcCreatePageComponent,
        data: {tipoCartera: 'CRE'}
      },
      {
        path: 'credito',
        component: CreditoPageComponent,
      },
      {
        path: 'solicitudes',
        component: SolicitudesPageComponent
      }
    ]
  },
  
  {
    path: 'cliente/:id',
    component: ClientePageComponent,
    resolve: { cliente: ClientePageResolver },
    children: [
      { path: 'info', component: ClienteInfoPageComponent},
      { path: 'estadoDeCuenta', component: EstadoCuentaComponent},
      { path: 'cobros', component: ClienteCobrosComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CxcRoutingModule { }
