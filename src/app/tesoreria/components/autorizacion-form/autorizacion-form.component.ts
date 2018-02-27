import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

import { SolicitudDeDeposito } from '../../model/solicitudDeDeposito';

@Component({
  selector: 'sx-autorizacion-form',
  templateUrl: './autorizacion-form.component.html'
})
export class AutorizacionFormComponent implements OnInit {
  solicitud: SolicitudDeDeposito;

  constructor(
    private dialogRef: MatDialogRef<AutorizacionFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.solicitud = data.solicitud;
  }

  ngOnInit() {}

  private buildForm() {}

  onSubmit() {}
}
