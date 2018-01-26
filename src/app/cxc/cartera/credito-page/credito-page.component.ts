import { Component, OnInit } from '@angular/core';
import { DatePipe, CurrencyPipe } from '@angular/common';

import { ClienteService } from 'app/clientes/services/cliente.service';
import { Observable } from 'rxjs/Observable';
import { Cliente } from 'app/_shared/models';
import { ITdDataTableColumn } from '@covalent/core/data-table/data-table.component';

@Component({
  selector: 'sx-credito-page',
  templateUrl: './credito-page.component.html',
  styles: [`
    mat-card2 {
      height: 500px;
    }
  `]
})
export class CreditoPageComponent implements OnInit {

  clientes$: Observable<Cliente[]>;

  loading$ = Observable.of(false);

  cartera = 'CRE'

  columns: ITdDataTableColumn[] = [
    {name: 'nombre', label: 'Nombre',sortable: true, numeric: false},
    {name: 'rfc', label: 'RFC',sortable: true, numeric: false, width: {min:100, max:150}},
    // {name: 'clave', label: 'Clave',sortable: true, numeric: false, width: {min:100, max:150}},
    {
      name: 'credito.lineaDeCredito', label: 'Crédito',sortable: true,numeric: false,
      format: (value)=> this.currencyPipe.transform(value, 'USD'), width: {min:100, max:150}
    },
    {
      name: 'credito.saldo', label: 'Saldo',sortable: true,numeric: false,
      format: (value)=> this.currencyPipe.transform(value, 'USD'), width: {min:150, max:250}
    },
    {name: 'credito.atrasoMaximo', label: 'Atraso M',sortable: true, numeric: false, width: {min:100, max:150}},
    
  ];

  constructor(
    private service: ClienteService,
    private datePipe: DatePipe,
    private currencyPipe: CurrencyPipe,
  ) { }

  ngOnInit() {
    this.load();
  }

  load() {
    this.clientes$ = this.service.busarClientes({cartera: this.cartera})
  }

}
