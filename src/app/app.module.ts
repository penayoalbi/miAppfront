import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './componentes/login/login.component';
import { RegistroComponent } from './componentes/registro/registro.component';
import { MensajeComponent } from './componentes/mensaje/mensaje.component';
import { ApiServiceService } from './helper/api-service.service';
import { HttpClient, HttpClientModule} from '@angular/common/http';
import { UsuarioServiceService } from './helper/usuario-service.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistroComponent,
    MensajeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [
    HttpClient,
    UsuarioServiceService,
    ApiServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
