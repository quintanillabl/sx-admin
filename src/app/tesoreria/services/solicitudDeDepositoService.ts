import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import { SolicitudDeDeposito } from '../model/solicitudDeDeposito';
import { Sucursal } from 'app/_shared/models';
import { environment } from 'environments/environment';


@Injectable()
export class SolicitudDeDepositoService {

  private  apiUrl = environment.apiUrl + '/tesoreria/solicitudes';

  constructor(private http: HttpClient) {}

  get(id: string): Observable<SolicitudDeDeposito> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<SolicitudDeDeposito>(url).shareReplay();
  }

  pendientes(): Observable<SolicitudDeDeposito[]> {
    const params = new HttpParams()
      .set('pendientes', 'pendientes');
    const url = `${this.apiUrl}/pendientes`
    return this.http.get<SolicitudDeDeposito[]>(url, {params: params});
  }

  list(documento?: string, sucursal?: Sucursal ): Observable<SolicitudDeDeposito[]> {
    let params = new HttpParams();
    if (documento) {
      params =  params.set('documento', documento);
    }
    if (sucursal) {
      params =  params.set('sucursal', sucursal.id);
    }
    return this.http.get<SolicitudDeDeposito[]>(this.apiUrl, {params: params});
  }

  save(sol: SolicitudDeDeposito): Observable<SolicitudDeDeposito> {
    return this.http.post<SolicitudDeDeposito>(this.apiUrl, sol);
  }

  update(sol: SolicitudDeDeposito): Observable<SolicitudDeDeposito> {
    const url = `${this.apiUrl}/${sol.id}`;
    return this.http.put<SolicitudDeDeposito>(url, sol);
  }

  autorizar(sol: SolicitudDeDeposito) {
    const url = `${this.apiUrl}/autorizar/${sol.id}`;
    return this.http.put(url, sol);
  }

}
