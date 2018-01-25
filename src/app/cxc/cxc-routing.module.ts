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
        component: CreditoPageComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CxcRoutingModule { }
