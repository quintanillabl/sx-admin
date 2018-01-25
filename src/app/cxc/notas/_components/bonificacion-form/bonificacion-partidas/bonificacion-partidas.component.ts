import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'sx-bonificacion-partidas',
  templateUrl: './bonificacion-partidas.component.html',
  styles: []
})
export class BonificacionPartidasComponent implements OnInit {

  @Input() parent: FormGroup

  constructor() { }

  ngOnInit() {
  }

}
