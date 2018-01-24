import { Component, OnInit } from '@angular/core';
import { DatePipe, CurrencyPipe } from '@angular/common';

import { ITdDataTableColumn, TdDataTableSortingOrder,  } 
from '@covalent/core/data-table/data-table.component';
import { ITdDataTableSortChangeEvent } 
from '@covalent/core/data-table/data-table-column/data-table-column.component';
import { TdDataTableService } from '@covalent/core/data-table/services/data-table.service';
import { IPageChangeEvent } from '@covalent/core/paging/paging-bar.component';
import { NotascxcService } from 'app/cxc/services/notascxc.service';
import { TdDialogService } from '@covalent/core';

@Component({
  selector: 'sx-devoluciones',
  templateUrl: './devoluciones.component.html',
  styles: []
})
export class DevolucionesComponent implements OnInit {

  procesando = false

  pendientes = true;
  cartera = 'CRE';

  columns: ITdDataTableColumn[] = [
    {name: 'sucursal.nombre', label: 'Sucursal', numeric: false, nested: true, width: 150},
    {name: 'venta.cliente.nombre', label: 'Cliente', numeric: false, width: 300},
    {name: 'documento', label: 'RMD',sortable: true, numeric: true, width: 70},
    {name: 'fecha', label: 'Fecha', width: 100, format: (date) => this.datePipe.transform(date, 'dd/MM/yyyy')},
    {name: 'factura', label: 'Factura', numeric: true, width: 100},
    {name: 'cobro.fecha', label: 'Atendida', nested: true, numeric: false, width: 100, format: (date) => this.datePipe.transform(date, 'dd/MM/yyyy')},
    {name: 'total', label: 'Total', numeric: true, format: (value)=> this.currencyPipe.transform(value, 'USD')}
  ];

  data: any[] = []; 
  filteredData: any[] = this.data;
  filteredTotal: number = this.data.length;

  searchTerm: string = '';
  fromRow: number = 1;
  currentPage: number = 1;
  pageSize: number = 20;
  sortBy: string = 'documento';
  selectedRows: any[] = [];
  sortOrder: TdDataTableSortingOrder = TdDataTableSortingOrder.Descending;
  selectable = true;

  constructor(
    private datePipe: DatePipe,
    private currencyPipe: CurrencyPipe,
    private _dataTableService: TdDataTableService,
    private service: NotascxcService,
    private dialogService: TdDialogService
  ) { }

  ngOnInit() {
    this.load();
  }

  load() {
    this.service
    .buscarRmd()
    .subscribe( res => {
      this.data = res;
      this.filteredData = res;
      this.filteredTotal = res.length;
      console.log('Pendientes: ', res);
    });
  }

  search(term){
    
  }
  
  atender() {
    console.log('Generando nota de devolucin: ', this.selectedRows.length);
    if (this.selectedRows.length) {
      const ref = this.dialogService.openConfirm({
        title: 'Nota de crédito',
        message: `Generar nota de crédito a ${this.selectedRows.length} devoluciones seleccionadas?`,
        acceptButton: 'Aceptar',
        cancelButton: 'Cancelar'
      });
      ref.afterClosed().subscribe(val => {
        if (val) {
          this.service.generarNotaDeDevolucion(this.selectedRows[0], this.cartera)
          .subscribe(
            res => console.log('Notas generadas: ', res),
            error => console.log('Error generando notas de rmd: ', error)
          );
        }
      });
    }
  }

  sort(sortEvent: ITdDataTableSortChangeEvent): void {
    this.sortBy = sortEvent.name;
    this.sortOrder = sortEvent.order;
    this.filter();
  }
  
  page(pagingEvent: IPageChangeEvent): void {
    this.fromRow = pagingEvent.fromRow;
    this.currentPage = pagingEvent.page;
    this.pageSize = pagingEvent.pageSize;
    this.filter();
  }

  filter(): void {
    let newData: any[] = this.data;
    let excludedColumns: string[] = this.columns
    .filter((column: ITdDataTableColumn) => {
      return ((column.filter === undefined && column.hidden === true) ||
              (column.filter !== undefined && column.filter === false));
    }).map((column: ITdDataTableColumn) => {
      return column.name;
    });
    newData = this._dataTableService.filterData(newData, this.searchTerm, true, excludedColumns);
    this.filteredTotal = newData.length;
    newData = this._dataTableService.sortData(newData, this.sortBy, this.sortOrder);
    newData = this._dataTableService.pageData(newData, this.fromRow, this.currentPage * this.pageSize);
    this.filteredData = newData;
  }

}
