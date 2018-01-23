import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ITdDataTableColumn } from '@covalent/core/data-table/data-table.component';

@Component({
  selector: 'sx-rmd-panel',
  templateUrl: './rmd-panel.component.html',
  styles: []
})
export class RmdPanelComponent implements OnInit {

  @Input() parent: FormGroup;
  
  @Input() partidas = [];

  columns: ITdDataTableColumn[] = [
    { name: 'producto',  label: 'Producto'},
    { name: 'descripcion', label: 'Descripcion'},
    { name: 'cantidad', label: 'Cantidad'},
    { name: 'importe', label: 'Importe'},
    
  ];

  constructor() { }

  ngOnInit() {
  }

}
