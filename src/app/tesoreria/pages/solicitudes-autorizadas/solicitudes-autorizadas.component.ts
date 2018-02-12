import { Component, OnInit } from '@angular/core';
import { ITdDataTableColumn } from '@covalent/core';
import { Observable } from 'rxjs/Observable';

import { SolicitudDeDepositoService } from 'app/tesoreria/services/solicitudDeDepositoService';
import { SolicitudDeDeposito } from 'app/tesoreria/model/solicitudDeDeposito';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { PagoUtils } from 'app/_shared/utils/pagoUtils.service';

@Component({
  selector: 'sx-solicitudes-autorizadas',
  templateUrl: './solicitudes-autorizadas.component.html',
  styles: []
})
export class SolicitudesAutorizadasComponent implements OnInit {

  columns: ITdDataTableColumn[] = [
    { name: 'folio', label: 'Folio', width: 70},
    { name: 'sucursal',  label: 'Sucursal', width: 120 },
    { name: 'cliente.nombre',  label: 'Cliente', width: 200 },
    { name: 'fechaDeposito', label: 'Fecha D', width: 100 },
    { name: 'cobro.formaDePago', label: 'F.P', width: 150 },
    { name: 'cobro.dateCreated', label: 'Autorizado', width: 100 },
    { name: 'total', label: 'Total', width: 100 },
    { name: 'banco.nombre', label: 'Banco', width: 150 },
    { name: 'cuenta.descripcion', label: 'Destino', width: 150 },
    { name: 'updateUser', label: 'Usuario', width: 150 },
  ];

  solicitudes = [];
  solicitudes$: Observable<SolicitudDeDeposito[]>
  procesando = false;
  
  search$ = new BehaviorSubject<string>('');

  constructor(
    private service: SolicitudDeDepositoService,
    private pagoUtils: PagoUtils
  ) { 
    
  }

  ngOnInit() {
    // this.solicitudes$.subscribe( res => this.solicitudes = res);
    this.load();
  }

  load() {
    this.procesando = true;
    this.solicitudes$ = this.search$
      .debounceTime(300)
      .distinctUntilChanged()
      .filter( term => term !== undefined)
      .switchMap( term => {
       return this.service.autorizadas({term: term})
       .do( term => this.procesando = true)
       .delay(100)
       .catch( err => this.handleError(err))
       .finally( () => this.procesando = false);
    });
  }

  search(term: string){
    this.search$.next(term);
  }

  handleError(err){
    console.error('Error: ', err);
    return Observable.of(err);
  }

  getFormaDePago(formaDePago) {
    return this.pagoUtils.slimFormaDePago(formaDePago);
  }

}
