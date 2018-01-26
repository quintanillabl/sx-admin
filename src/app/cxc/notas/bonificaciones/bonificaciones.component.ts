import { Component, OnInit } from '@angular/core';
import { DatePipe, CurrencyPipe } from '@angular/common';
import { Observable } from 'rxjs/Observable';
import { ITdDataTableColumn, TdDataTableSortingOrder } from '@covalent/core/data-table/data-table.component';
import { ITdDataTableSortChangeEvent } from '@covalent/core/data-table/data-table-column/data-table-column.component';
import { TdDataTableService } from '@covalent/core/data-table/services/data-table.service';
import { TdDialogService } from '@covalent/core';
import { TdLoadingService } from '@covalent/core/loading/services/loading.service';

import { NotascxcService } from 'app/cxc/services/notascxc.service';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';


@Component({
  selector: 'sx-bonificaciones',
  templateUrl: './bonificaciones.component.html',
  styles: []
})
export class BonificacionesComponent implements OnInit {

  cartera = 'CRE';

  columns: ITdDataTableColumn[] = [
    {name: 'serie', label: 'Serie',sortable: true, numeric: true, width: 70},
    {name: 'folio', label: 'Folio',sortable: true,nested: true, numeric: true, width: 100},
    {name: 'fecha', label: 'Fecha', width: 100, format: (date) => this.datePipe.transform(date, 'dd/MM/yyyy')},
    {name: 'cliente.nombre', label: 'Cliente', numeric: false, nested: true, width: 300},
    // {name: 'sucursal.nombre', label: 'Sucursal', numeric: false, nested: true, width: 150},
    {name: 'timbrado', label: 'Timbrado', numeric: false, width: 100},
    {name: 'total', label: 'Total', numeric: true, format: (value)=> this.currencyPipe.transform(value, 'USD')},
    {name: 'disponible', label: 'Disponible', numeric: true, format: (value)=> this.currencyPipe.transform(value, 'USD')}
  ];

  data: any[] = []; 
  filteredData: any[] = this.data;
  sortBy: string = 'folio';
  sortOrder: TdDataTableSortingOrder = TdDataTableSortingOrder.Descending;
  
  notas$: Observable<any[]>;
  search$ = new BehaviorSubject<string>('');

  constructor(
    private datePipe: DatePipe,
    private currencyPipe: CurrencyPipe,
    private _dataTableService: TdDataTableService,
    private dialogService: TdDialogService,
    private loadingService: TdLoadingService,
    private service: NotascxcService,
  ) { 
    this.notas$ = this.search$.debounceTime(400)
      .switchMap( term => {
        return this.service
        .list({term: term, tipo: 'BONIFICACION'})
        .catch( error => this.handelError2(error))
      });
    // this.notas$.subscribe(data => console.log('Data: ', data));
  }

  ngOnInit() {
    this.load();
  }

  search(term){
    this.search$.next(term);
  }

  load(){
    this.search$.next('');
    /*
    this.loadingService.register('procesando');
    this.service
    .list({tipo: 'BONIFICACION'})
    .catch( error => this.handelError2(error))
    .finally( () => this.loadingService.resolve('procesando'))
    //.delay(3000)
    .subscribe( res => {
      this.data = res;
      this.filteredData = res;
      console.log('Pendientes: ', res);
    });
    */
  }

  sort(sortEvent: ITdDataTableSortChangeEvent): void {
    this.sortBy = sortEvent.name;
    this.sortOrder = sortEvent.order;
    let newData: any[] = this.data;
    newData = this._dataTableService.sortData(newData, this.sortBy, this.sortOrder);
  }

  handelError2(response) {
    const message = response.error ? response.error.message : 'Error en servidor'
    const ref = this.dialogService.openAlert({
      title: `Error ${response.status}`,
      message: message,
      closeButton: 'Cerrar'
    });
    return Observable.empty();
  }


}
