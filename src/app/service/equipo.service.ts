import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { baseURL } from 'src/environments/environment';
import { IEquipo, EquipoResponse } from '../model/equipo-interface';

@Injectable({
  providedIn: 'root'
})
export class EquipoService {

  constructor(private oHttp: HttpClient) { }

  private entityURL = '/equipo';

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


}
