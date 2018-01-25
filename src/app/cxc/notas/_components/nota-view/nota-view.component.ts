import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NotascxcService } from 'app/cxc/services/notascxc.service';

@Component({
  selector: 'sx-nota-view',
  templateUrl: './nota-view.component.html',
  styles: []
})
export class NotaViewComponent implements OnInit {

  nota: any

  constructor(
    private route: ActivatedRoute,
    private service: NotascxcService,
  ) { }

  ngOnInit() {
    this.route.paramMap
    .switchMap(params => this.service.get(params.get('id')))
    .subscribe(nota => this.nota = nota);
  }

  print(nota) {
    // this.loadingService.register('procesando');
    this.service.print(nota)
      .delay(1000)
      .subscribe(res => {
        const blob = new Blob([res], {
          type: 'application/pdf'
        });
        // this.loadingService.resolve('saving');
        const fileURL = window.URL.createObjectURL(blob);
        window.open(fileURL, '_blank');
      }, error2 => console.log(error2));
  }

  timbrar(nota) {
    console.log('Timbrando: ', nota);
    
    if(!nota.cfdi) {
      this.service.timbrar(nota)
      .subscribe(res => {
        console.log('Nota timbrada: ', res)
      }, error => console.log('Error timbrando la nota ', error ));
    }
  }

  mostrarXml(nota) {
    this.service.mostrarXml(nota)
      .subscribe(res => {
        const blob = new Blob([res], {
          type: 'text/xml'
        });
        const fileURL = window.URL.createObjectURL(blob);
        window.open(fileURL, '_blank');
      });
  }


}
