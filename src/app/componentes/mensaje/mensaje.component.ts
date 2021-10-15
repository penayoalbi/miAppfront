import { Component, OnInit } from '@angular/core';
import { Mensaje } from 'src/app/clase/mensaje';
import { Usuario } from 'src/app/clase/usuario';
import { ApiServiceService } from 'src/app/helper/api-service.service';
import { UsuarioServiceService } from 'src/app/helper/usuario-service.service';

@Component({
  selector: 'app-mensaje',
  templateUrl: './mensaje.component.html',
  styleUrls: ['./mensaje.component.css']
})
export class MensajeComponent implements OnInit {
  mensaje!: Mensaje;
 // usuario!: Usuario;
  public mensajes: Mensaje[];
  private usuarioActual:any;

  setearUsuario(seleccionado: Usuario){
    this.usuarioActual = seleccionado;
    this.apiService.traerMensaje(this.usuarioActual.id,this.usuarioActual.token,seleccionado.id);
  }

  constructor(private apiService: ApiServiceService, private usuarioService: UsuarioServiceService) {
    this.mensaje = new Mensaje;
    this.apiService.listaUsuario(this.usuarioService.getUsuario().id,this.usuarioService.getUsuario().token).subscribe();
    this.mensajes =[];
  }

  ngOnInit(): void {
  }

  /*Mensajes(){
    this.apiService.traerMensaje(this.usuarioActual.id,this.usuarioActual.token,this.mensaje.receptorID).subscribe();
  }*/
}
