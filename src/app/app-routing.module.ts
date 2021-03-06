import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './componentes/login/login.component';
import { RegistroComponent } from './componentes/registro/registro.component';
import { MensajeComponent } from './componentes/mensaje/mensaje.component';
import { UsuariosComponent } from './componentes/usuarios/usuarios.component';

const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'registro', component: RegistroComponent},
  {path: 'mensaje', component: MensajeComponent},
  {path: 'usuarios', component: UsuariosComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
