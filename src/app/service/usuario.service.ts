import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {Usuario} from "../model/usuario";

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  url = "http://localhost:9898/";
  httpHeaders: any;
  constructor(private http: HttpClient) {
    this.httpHeaders = new HttpHeaders({
      Authorization: localStorage.getItem('token'),
    });
  }

  public listar(): Observable<Usuario[]>{
    return this.http.get<Usuario[]>(this.url+"listar",{headers: this.httpHeaders});
  }

  public guardar(usuario: Usuario): Observable<any>{
    return this.http.post<any>(this.url+"nuevo",usuario,{headers: this.httpHeaders});
  }

  public login(username: string, contraseña:string):any{
    return this.http.get<Usuario>(this.url+`login/${username}/${contraseña}`);
  }
}
