import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Usuario } from '../clase/usuario';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {
  url: String;

  constructor(private http: HttpClient) {
    this.url='https://apiloginbetran.herokuapp.com/';
  }

  ingresar(usuario:Usuario): Observable<Usuario[]>{
    return <Observable<Usuario[]>>(this.http.post(this.url+'Usuario/loguear',JSON.stringify(usuario)));
  };

  crearUsuario(usuario: Usuario){
    return  this.http.post(this.url+'Usuario/crear',JSON.stringify(usuario));
  }
}

