import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray, FormControl } from '@angular/forms';

@Component({
  selector: 'sx-bonificacion-form',
  templateUrl: './bonificacion-form.component.html',
  styles: []
})
export class BonificacionFormComponent implements OnInit {

  form: FormGroup;

  @Input() cartera = 'NO';

  @Output() save = new EventEmitter<any>();

  @Output() cancelar = new EventEmitter();

  constructor(
    private fb: FormBuilder
  ) { 
    this.buildForm();
  }

  private buildForm() {
    this.form = this.fb.group({
      cliente: [null, Validators.required],
      tipoDeCalculo: [{value : 'PORCENTAJE', disabled: false}],
      baseDelCalculo: 'Saldo',
      fecha: [{value: new Date(), disabled: true}],
      cartera: [this.cartera, Validators.required],
      moneda: [{value:'MXN', disabled: true}, Validators.required],
      tipoDeCambio: [{value: 1.0, disabled: true}],
      importe: [{value: 0.0, disabled: true}, [Validators.required, Validators.min(1.0)]],
      descuento: [{value: 0.0, disabled: true}, [Validators.min(0), Validators.max(99.99)]],
      comentario: [''],
      partidas: this.fb.array([])
    });
  }

  ngOnInit() {
  }

  onSubmit() {
    if (this.form.valid) {
      this.save.emit(this.prepareEntity())
    }
  }

  private prepareEntity() {
    const res = {...this.form.value};
    res.tipoCartera = this.cartera;
    res.tipo = 'BONIFICACION';
    res.serie = 'BON'
    return res
  }

  agregarFacturas(facturas: Array<any>) {
    console.log('Facturas: ', facturas);
    facturas.forEach(item => {
      const det = {
        cuentaPorCobrar: item.id,
      };
      this.partidas.push(new FormControl(det));
    });
  }

  recalcular() {
    
  }

  get partidas() {
    return this.form.get('partidas').value as FormArray;
  }

}
