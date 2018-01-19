import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs/Observable";
import * as _ from 'lodash';

import { environment } from 'environments/environment';

// import { ConfigService } from 'app/core/services/config.service';

@Injectable()
export class NotascxcService {

  //private apiUrl: string;  // 
  private apiUrl = environment.apiUrl + '/cxc/notas';
  
  constructor(
    private http: HttpClient,
    //private configService: ConfigService
  ) 
  {
    //this.apiUrl = configService.buildApiUrl('compras/recepciones');
  }
  
  get(id: string): Observable<any> {
    let url = `${this.apiUrl}/${id}`;
    return this.http.get<any>(url)
  }

  list(filtro?): Observable<any> {
    let params = new HttpParams();
    _.forIn(filtro, (value, key) =>{
      params = params.set(key,value);
    });
    return this.http.get<any>(this.apiUrl, {params: params})
  }
  
  

  /*
  print(com: RecepcionDeCompra) {
    const url = `${this.apiUrl}/print/${com.id}`;
    const headers = new HttpHeaders().set('Content-type' , 'application/pdf');
    return this.http.get(
      url, {
        headers: headers,
        responseType: 'blob'
      }
    );
  }
  
  recepcionDeMercancia(fecha: Date) {
    const url = `${this.apiUrl}/recepcionDeMercancia/`;
    const params = new HttpParams().set('fecha', fecha.toISOString())
    const headers = new HttpHeaders().set('Content-type' , 'application/pdf');
    return this.http.get(
      url, {
        headers: headers,
        responseType: 'blob',
        params: params
      },
    );
  }
  */

}

