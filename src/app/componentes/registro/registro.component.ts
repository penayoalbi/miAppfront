import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from 'src/app/helper/api-service.service';
import { Usuario } from 'src/app/clase/usuario';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {
  usuario!: Usuario;
  constructor( private apiService: ApiServiceService) { 
    this.usuario= new Usuario;
  }

  ngOnInit(): void {
  }
  registrar(){
    this.apiService.crearUsuario(this.usuario).subscribe();
  }
}
