import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CxcPageComponent } from './cxc-page/cxc-page.component';
import { NotascxcPageComponent } from './notas/notascxc-page/notascxc-page.component';
import { NotacxcCreatePageComponent } from 'app/cxc/notas/notacxc-create-page/notacxc-create-page.component';

const routes: Routes = [
  {
    path: '', 
    component: CxcPageComponent,
    children: [
      {
        path: 'notas',
        component: NotascxcPageComponent
      },
      {
        path: 'notas/create',
        component: NotacxcCreatePageComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CxcRoutingModule { }