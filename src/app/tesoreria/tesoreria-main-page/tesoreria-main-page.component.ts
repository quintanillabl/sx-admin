import { Component, OnInit } from '@angular/core';
import { TdMediaService } from '@covalent/core';

@Component({
  selector: 'sx-tesoreria-main-page',
  templateUrl: './tesoreria-main-page.component.html',
  styles: [`
    .tesoreria-page {
      width: 100%;
      height: 100%;
      background-color: beige;
    }

  `]
})
export class TesoreriaMainPageComponent implements OnInit {

  navigation: Object[] = [
    {
      path: 'autorizaciones',
      title: 'Pendientes',
      description: 'Solicitudes de deposito por autorizar',
      icon: 'repeat'
    }
  ];

  constructor(
    public media: TdMediaService
  ) { }

  ngOnInit() {
  }

}
