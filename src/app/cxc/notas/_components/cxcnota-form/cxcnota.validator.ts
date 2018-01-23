import { AbstractControl } from '@angular/forms';

export const CxcnotaValidator = (control: AbstractControl): {[key: string]: boolean} => {
  // Validar la necesidad de referencias
  const tipo: string = control.get('tipo').value;
  const referencias = control.get('referencias').value;
  const sinReferencia = control.get('sinReferencia').value;

  switch (tipo) {
    case 'DEVOLUCION':
      return referencias.length == 0 ? {requiereRmd: true} : null;
    case 'BONIFICACION':
      if (!sinReferencia) {
        return referencias.length == 0 ? {requiereFacturas: true} : null;
      }
  }
  return null;
}