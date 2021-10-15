import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/clase/usuario';
import { ApiServiceService } from 'src/app/helper/api-service.service';
import { UsuarioServiceService } from 'src/app/helper/usuario-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  usuario: Usuario;
  constructor(private apiService: ApiServiceService, private userService: UsuarioServiceService) {
    this.usuario= new Usuario;
   }

  ngOnInit(): void {
  }

  login(){
    this.apiService.ingresar(this.usuario).subscribe(
      datos=>{
        this.userService.setUsuario(datos[0]);
      }
    );
  }
}

