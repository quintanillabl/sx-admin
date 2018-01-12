import { Component, OnInit } from '@angular/core';
import { ITdDataTableColumn } from '@covalent/core';

@Component({
  selector: 'sx-solicitudes-autorizadas',
  templateUrl: './solicitudes-autorizadas.component.html',
  styles: []
})
export class SolicitudesAutorizadasComponent implements OnInit {

  columns: ITdDataTableColumn[] = [
    { name: 'first_name',  label: 'First Name' },
    { name: 'last_name', label: 'Last Name' },
    { name: 'gender', label: 'Gender' },
    { name: 'email', label: 'Email' },
    { name: 'balance', label: 'Balance'},
  ];

  solicitudes = [];

  constructor() { }

  ngOnInit() {
  }

  load() {

  }

  search(term: string){

  }



}
