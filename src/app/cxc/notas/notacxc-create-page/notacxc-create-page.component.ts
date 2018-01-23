import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'sx-notacxc-create-page',
  templateUrl: './notacxc-create-page.component.html',
  styles: []
})
export class NotacxcCreatePageComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  onCancelar() {
    this.router.navigate(['cxc/notas']);
  }

  onSave(nota) {
    console.log('Salvando nota: ', nota);
  }

}
