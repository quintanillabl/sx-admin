import { Component, OnInit, Input, Output, EventEmitter, OnDestroy, OnChanges, SimpleChanges} 
  from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl, ValidatorFn } from '@angular/forms';
import { NotaDeCargo } from 'app/_shared/models/notaDeCargo';


@Component({
  selector: 'sx-notadecargo-form',
  templateUrl: './notadecargo-form.component.html',
  styles: []
})
export class NotadecargoFormComponent implements OnInit {

  form: FormGroup;

  @Input() cartera;

  @Output() cancel = new EventEmitter();

  @Output() save = new EventEmitter();

  @Input() nota: NotaDeCargo;

  constructor(private fb: FormBuilder) { 
    this.buildForm();
  }

  ngOnInit() {
    
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.nota) {
      console.log('Editando solicitud: ', changes.nota);
      this.form.patchValue(this.nota);
    }
  }

  buildForm() {
    this.form = this.fb.group({
      cliente: [null, Validators.required],
      importe: [{value: 0.0, disabled: false}, [Validators.required]],
      impuesto: [{value: 0.0, disabled: true}, [Validators.required]],
      total: [{value: 0.0, disabled: true}, [Validators.required]],
      cargo: [0.0, [Validators.required]],
      comentario: null
    });
  }

  prepareEntity() {
    const entity = {
      ...this.form.value,
      tipo: this.cartera,
    };
    return entity;
  }

  onSubmit() {
    const res = this.prepareEntity();
    console.log('Salvando: ', res);
    if (this.isEditable()) {
      this.save.emit(res);
    }
  }

  isEditable() {
    if (this.nota) {
      return this.nota.cuentaPorCobrar.uuid === null
    }
    return true
  }

}
