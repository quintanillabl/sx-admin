import {Component, Input, OnInit, OnDestroy,
  forwardRef, ChangeDetectionStrategy, ViewChild, ElementRef} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {Subscription} from 'rxjs/Subscription';
import {ControlValueAccessor, FormControl, NG_VALUE_ACCESSOR } from '@angular/forms';
import * as _ from 'lodash';

// import { Cliente } from 'app/models';
import { environment } from 'environments/environment';
import { Cliente } from 'app/_shared/models';
// import { ConfigService } from 'app/core/services/config.service';

export const CLIENTE_LOOKUPFIELD_VALUE_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef( () => ClienteFieldComponent),
  multi: true,
}

@Component({
  selector: 'sx-cliente-field',
  providers: [CLIENTE_LOOKUPFIELD_VALUE_ACCESSOR],
  templateUrl: './cliente-field.component.html',
  styles: [`
    .fill {
      width: 100%;
    }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ClienteFieldComponent implements OnInit, ControlValueAccessor, OnDestroy {

  apiUrl: string;

  searchControl = new FormControl();

  @Input() required = false;

  @Input() activos = true;

  @Input() tipo = 'CREDITO';

  @Input() placeholder = 'Cliente';

  clientes$: Observable<Cliente[]>;

  onChange;
  onTouch;
  subscription: Subscription;

  @ViewChild('inputField') inputField: ElementRef;

  constructor(
    private http: HttpClient,
    // private config: ConfigService
  ) {
    // this.apiUrl = config.buildApiUrl('clientes');
    this.apiUrl = environment.apiUrl + '/clientes';
  }

  ngOnInit() {
    this.clientes$ = this.searchControl
      .valueChanges
      .startWith(null)
      .switchMap( term => this.lookup(term));
  }


  select(event) {
    // console.log('Selected: ', event.option.value);
    this.onChange(event.option.value);
  }

  ngOnDestroy() {}

  lookup(term: string): Observable<Cliente[]> {
    const params = new HttpParams()
      .set('term', term).set('tipo', this.tipo);
    return this.http.get<Cliente[]>(this.apiUrl, {params: params});
  }

  displayFn(producto: Cliente) {
    return producto ? `${producto.nombre} (${producto.clave})` : '';
  }

  writeValue(obj: any): void {
    this.searchControl.setValue(obj);
    if (obj === null) {
      this.searchControl.reset();
    }
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouch = fn;
  }

  setDisabledState?(isDisabled: boolean): void {
    isDisabled ? this.searchControl.disable() : this.searchControl.enable();
  }

  focus() {
    this.inputField.nativeElement.focus();
  }

  onBlur() {
    if (this.onTouch) {
      this.onTouch();
    }
  }

}
