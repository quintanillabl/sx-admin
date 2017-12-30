import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { SolicitudDeDepositoService } from '../../services/solicitudDeDepositoService';
import { SolicitudDeDeposito } from '../../model/solicitudDeDeposito';
import { MatDialog } from '@angular/material';
import { AutorizacionesShowComponent } from '../../components/autorizaciones-show/autorizaciones-show.component';

@Component({
  selector: 'sx-autorizacion-depositos-page',
  templateUrl: './autorizacion-depositos-page.component.html',
  styles: [`
    .page {
      background-color: lightgray;
      height: 100%;
    }
  `]
})
export class AutorizacionDepositosPageComponent implements OnInit {

  pendientes$: Observable<SolicitudDeDeposito[]>;


  procesando = false;

  constructor(
    private service: SolicitudDeDepositoService,
    private dialog: MatDialog) { }

  ngOnInit() {
    this.load();
  }

  load() {
    console.log('Cargando solicitudes pendientes');
    this.pendientes$ = this.service.pendientes()
      .do( () => this.procesando = true)
      .shareReplay()
      .delay(1000)
      .finally( () => this.procesando = false);

  }

  search(term: string) {
    console.log('Buscando: ', term);
  }

  show(sol: SolicitudDeDeposito) {
    const params = {solicitud: sol};
    const dialogRef = this.dialog.open(AutorizacionesShowComponent, {
      data: params
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        console.log('Procesando: ', result);
      }
    });
  }

}
