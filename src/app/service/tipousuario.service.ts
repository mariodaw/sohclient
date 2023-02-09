import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { baseURL } from 'src/environments/environment';
import { IPage } from '../model/generic-types-interface';
import { ITipousuario } from '../model/tipousuario-interface';


@Injectable({
  providedIn: 'root'
})
export class TipousuarioService {
  url: string = "";

  constructor( private oHttp : HttpClient ) {
    this.url = `${baseURL}${this.entityURL}`;
   }

  private entityURL: string = "/tipousuario";



  getTipousuarioPlist(page: number, size: number): Observable<IPage<ITipousuario>>{
    let params = new HttpParams()
    .set("page", page)
    .set("size", size);

  
    return this.oHttp.get<IPage<ITipousuario>>(this.url,{params: params});
  }
  getOne(id: number): Observable<ITipousuario> {    
    return this.oHttp.get<ITipousuario>(`${baseURL}${this.entityURL}` + "/" + id);
  }
}
