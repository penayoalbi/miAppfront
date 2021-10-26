import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/clase/usuario';
import { ApiServiceService } from 'src/app/helper/api-service.service';
import { UsuarioServiceService } from 'src/app/helper/usuario-service.service';
import { MensajeComponent } from '../mensaje/mensaje.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  usuario: Usuario;

  constructor(
    private apiService: ApiServiceService,
    private userService: UsuarioServiceService,
    private ruteo: Router) {
    this.usuario = new Usuario;
   }

  ngOnInit(): void {
  }

  logeo(resp: Usuario[]){
    if(resp.length==0){
      alert("Error: usuario no valido");
    }else{
      this.userService.setUsuario(resp[0]);
      this.ruteo.navigateByUrl('usuarios');
    }
  }

  login(){
    this.apiService.ingresar(this.usuario).subscribe(
      datos => {
      this.logeo(datos);}, err=>alert(err.message)
    );
  }
  
}

