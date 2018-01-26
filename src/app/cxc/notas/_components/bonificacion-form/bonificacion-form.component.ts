import { Component, OnInit, Input, Output, EventEmitter, OnDestroy, ChangeDetectorRef, HostListener, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray, FormControl, AbstractControl } from '@angular/forms';
import { Subject } from 'rxjs/Subject';

import { BonoficacionFormValidator } from './bonificacion-form.validator';
import { FacturasSelectorBtnComponent } from 'app/cxc/notas/_components/facturas-selector/facturas-selector-btn/facturas-selector-btn.component';


@Component({
  selector: 'sx-bonificacion-form',
  templateUrl: './bonificacion-form.component.html',
  styles: []
})
export class BonificacionFormComponent implements OnInit, OnDestroy {

  form: FormGroup;

  @Input() cartera = 'NO';

  @Output() save = new EventEmitter<any>();

  @Output() cancelar = new EventEmitter();

  destroy$ = new Subject<boolean>();

  @ViewChild('insertBtn') insertBtn: FacturasSelectorBtnComponent;

  facturas = []; 

  constructor(
    private fb: FormBuilder,
    private cd: ChangeDetectorRef
  ) { 
    
  }

  private buildForm() {
    this.form = this.fb.group({
      cliente: [null, Validators.required],
      tipoDeCalculo: 'PORCENTAJE',
      baseDelCalculo: 'Saldo',
      fecha: [{value: new Date(), disabled: true}],
      cartera: [this.cartera, Validators.required],
      moneda: [{value:'MXN', disabled: true}, Validators.required],
      tipoDeCambio: [{value: 1.0, disabled: true}],
      importe: [{value: 0.0, disabled: true}, [Validators.required, Validators.min(1.0)]],
      descuento: [{value: 0.0, disabled: false}, [Validators.max(99.99)]],
      comentario: [''],
      partidas: this.fb.array([]),
    }, {validator: BonoficacionFormValidator});
    this.observarTipoDeCalculo();
  }

  ngOnInit() {
    this.buildForm();
  }

  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }

  private observarTipoDeCalculo() {
    this.form.get('tipoDeCalculo')
      .valueChanges
      .takeUntil(this.destroy$)
      .subscribe( (tipo: string) => {
        switch (tipo) {
          case 'PORCENTAJE':
          this.calculoPorcentual()
          break;
          case 'PRORRATEO':
          this.calculoProrrateo();
          break
        }
      });
  }

  calculoPorcentual() {
    this.form.get('importe').disable();
    this.form.get('descuento').enable();
  }

  calculoProrrateo() {
    this.form.get('importe').enable();
    this.form.get('descuento').disable();
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
    res.total = res.importe
    return res
  }

  agregarFacturas(facturas: Array<any>) {
    console.log('Agregando: ', facturas);
    facturas.forEach(item => {
      const det = {
        cuentaPorCobrar: item,
      };
      this.partidas.push(new FormControl(det));
      // this.facturas.push(det);
    });
    this.cd.detectChanges();
  }

  

  get partidas() {
    return this.form.get('partidas') as FormArray;
  }

  onDeletePartida( index: number) {
    this.partidas.removeAt(index);
  }

  @HostListener('window:keyup', ['$event'])
  keyEvent(event: KeyboardEvent) {
    // console.log(event);
    if (event.code === 'Insert' ) {
      if (this.form.get('cliente').value !== null) {
        this.insertBtn.lookup();
      }
      // console.log('Insertar partida')
    }
    if (event.code === 'F10') {
      // console.log('Salvando con tecla F10')
      
    }
  }
  

}
