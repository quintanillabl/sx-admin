import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'sx-notasdecargo-partidas',
  templateUrl: './notasdecargo-partidas.component.html',
  styles: []
})
export class NotasdecargoPartidasComponent implements OnInit {


  @Input() parent: FormGroup;

  @Input() partidas = [];

  @Output() delete = new EventEmitter();

  constructor() { }

  ngOnInit() {}

  get invalid() {
    return this.parent.get('partidas').value.length === 0
  }

}

