import { Component, OnInit } from '@angular/core';
import { TdMediaService } from '@covalent/core';

@Component({
  selector: 'sx-cxc-page',
  templateUrl: './cxc-page.component.html',
  styles: [``]
})
export class CxcPageComponent implements OnInit {

  navigation: Object[] = [
    {
      path: 'notas',
      title: 'Notas de crédito',
      description: 'Bonificaciones y Devoluciones',
      icon: 'repeat'
    },
    {
      path: 'credito',
      title: 'Clientes',
      description: 'Cartera de crédito ',
      icon: 'group'
    },
    {
      path: 'solicitudes',
      title: 'Solicitudes',
      descripcion: 'Autorizaciones de depositos',
      icon: 'check_circle'
    },
    {
      path: 'cobros',
      title: 'Cobros',
      descripcion: 'Cobros registrados',
      icon: 'attach_money'
    },
    {
      path: 'notasDeCargo',
      title: 'Cargos',
      descripcion: 'Notas de cargo',
      icon: 'reply_all'
    }
  ];

  constructor(
    public media: TdMediaService
  ) { }

  ngOnInit() {
  }

}

