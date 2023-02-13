import { IEquipo2Form, IEquipo2Send } from './../model/equipo-interface';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { baseURL } from 'src/environments/environment';
import { IEquipo, EquipoResponse } from '../model/equipo-interface';

@Injectable({
  providedIn: 'root'
})
export class EquipoService {

 
  private entityURL = '/equipo';
  url: string = ""

  constructor(private oHttp: HttpClient) {
    this.url = `${baseURL}${this.entityURL}`;
  }

  getEquiposPlist(page: number, size: number, termino: string, id_tipousuario: number): Observable<EquipoResponse> {
    let params = new HttpParams()
      .set("filter", termino)
      .set("page", page)
      .set("size", size);
    if (id_tipousuario != 0) {
      params = params.set("tipousuario", id_tipousuario);
    }

    let url: string = `${baseURL}${this.entityURL}`;
    return this.oHttp.get<EquipoResponse>(url, { params: params });
  }


  getOne(id: number): Observable<IEquipo> {    
    return this.oHttp.get<IEquipo>(`${baseURL}${this.entityURL}` + "/" + id);
  }

  removeOne(id: number): Observable<number> {
    return this.oHttp.delete<number>(this.url + '/' + id);
  }

  updateOne(oEquipo2Send: IEquipo2Send): Observable<number> {
    return this.oHttp.put<number>(this.url, oEquipo2Send);
  }


  newOne(oEquipo2Send: IEquipo2Send): Observable<number> {
    return this.oHttp.post<number>(this.url, oEquipo2Send);
  }

}
