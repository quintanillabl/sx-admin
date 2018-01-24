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
      title: 'Crédito',
      description: 'Cartera de crédito ',
      icon: 'group'
    },
  ];

  constructor(
    public media: TdMediaService
  ) { }

  ngOnInit() {
  }

}

