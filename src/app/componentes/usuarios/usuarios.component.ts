import { useAnimation } from '@angular/animations';
import { Component, Input, OnInit } from '@angular/core';
import { Mensaje } from 'src/app/clase/mensaje';
import { Usuario } from 'src/app/clase/usuario';
import { ApiServiceService } from 'src/app/helper/api-service.service';
import { UsuarioServiceService } from 'src/app/helper/usuario-service.service';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {
  mensaje!: string;
  public usuarios!: Usuario[];
  public mensajes: Mensaje[];
  public usuarioActual!:Usuario;
  mensajeNuevo: boolean;

  setearUsuario(seleccionado: Usuario){
    this.usuarioActual = seleccionado;
    this.apiService.traerMensaje(this.usuarioService.getUsuario().id, this.usuarioService.getUsuario().token,seleccionado.id).subscribe(
      then => this.mensajes = then);
  }

  constructor(private apiService: ApiServiceService, private usuarioService: UsuarioServiceService) {
    this.mensajeNuevo = false;
    this.apiService.listaUsuario(this.usuarioService.getUsuario().id, this.usuarioService.getUsuario().token).subscribe(
      then => this.usuarios = then);
    this.mensaje =this.mensaje;
    this.mensajes=[];
  }
  ngOnInit(): void {
  }
  agregarNuevo(){
    this.mensajeNuevo = true;
  }

  enviar(){
    this.apiService.crearMensaje(this.mensaje, this.usuarioActual.id, this.usuarioService.getUsuario().id,
    this.usuarioService.getUsuario().token).subscribe(then => this.setearUsuario(this.usuarioActual));
    this.mensajeNuevo = false;
  }
}
