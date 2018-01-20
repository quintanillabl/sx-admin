import { Component, OnInit } from '@angular/core';
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

  clientes$ :Observable<Array<any>>;

  constructor(
    private fb: FormBuilder
  ) { 
    this.form = fb.group({
      cliente: [null, Validators.required],
      tipo: [null]
    });
  }

  ngOnInit() {}

  onSubmit(){
    console.log('Salvando nota: ', this.form.value)
  }
  

}
