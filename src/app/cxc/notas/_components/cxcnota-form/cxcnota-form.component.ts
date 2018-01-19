import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'sx-cxcnota-form',
  templateUrl: './cxcnota-form.component.html',
  styles: []
})
export class CxcnotaFormComponent implements OnInit {

  form: FormGroup;

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
