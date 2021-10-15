import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Mensaje } from '../clase/mensaje';
import { Usuario } from '../clase/usuario';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {
  url: String;
  usuario!: Usuario;
  mensaje!: Mensaje;

  constructor(private http: HttpClient) {
    this.url='https://apiloginbetran.herokuapp.com/';
  }

  ingresar(usuario:Usuario): Observable<Usuario[]>{
    return <Observable<Usuario[]>>(this.http.post(this.url+'Usuario/loguear',JSON.stringify(usuario)));
  };

  crearUsuario(usuario: Usuario){
    return  this.http.post(this.url+'Usuario/crear',JSON.stringify(usuario));
  }
  listaUsuario(id:Number, token: String){
    return <Observable<Usuario[]>>(this.http.post(this.url+'Usuario/traerTodos/'+id+token,JSON.stringify(this.usuario)));
  };

  crearMensaje(mensaje: Mensaje){
    return this.http.post(this.url+'Mensaje/crear',JSON.stringify(mensaje));
  }

  traerMensaje(id: number,token:String, destinoID: Number){
    return <Observable<Mensaje[]>>(this.http.post(this.url+'Mensaje/traerTodos/'+id+token+destinoID,JSON.stringify(this.mensaje)));
  }
}

