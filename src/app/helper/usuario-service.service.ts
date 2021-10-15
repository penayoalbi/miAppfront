import { Injectable } from '@angular/core';
import { Usuario } from '../clase/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioServiceService {
  constructor() {
   }
   private usuario!: Usuario;

  setUsuario(usuario: Usuario){
    this.usuario = usuario;
  } 
  getUsuario(){
    return this.usuario;
  }
}
