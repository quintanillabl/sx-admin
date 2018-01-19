import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ITdDynamicElementConfig, TdDynamicElement, TdDynamicType } from '@covalent/dynamic-forms';

@Component({
  selector: 'sx-cxcnota-form',
  templateUrl: './cxcnota-form.component.html',
  styles: []
})
export class CxcnotaFormComponent implements OnInit {

  form: FormGroup;
  
  fields = [
    {
      "name": "cliente",
      "label": 'Cliente',
      "type": "input",
      "required": true,
      "flex": 100,
      
    },
    
  ];

  constructor(
    private fb: FormBuilder
  ) { 
    this.form = fb.group({
      cliente: [null, Validators.required],
      tipo: [null]
    });
  }

  ngOnInit() {
  }

}
