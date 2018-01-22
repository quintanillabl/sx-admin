import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import { ITdDynamicElementConfig, TdDynamicElement, TdDynamicType } from '@covalent/dynamic-forms';


@Component({
  selector: 'sx-cxcnota-form',
  templateUrl: './cxcnota-form.component.html',
  styles: []
})
export class CxcnotaFormComponent implements OnInit {

  form: FormGroup;

  clientes$: Observable<Array<any>>;

  @Input() cartera = 'CRE';

  constructor(
    private fb: FormBuilder
  ) {
    this.form = fb.group({
      cliente: [null, Validators.required],
      tipo: [null, Validators.required],
      fecha: [{value: new Date(), disabled: true}],
      cartera: [this.cartera, Validators.required]
    });
  }

  ngOnInit() {}

  onSubmit() {
    console.log('Salvando nota: ', this.form.value);
  }

  get fecha() {
    return this.form.get('fecha').value;
  }


}
