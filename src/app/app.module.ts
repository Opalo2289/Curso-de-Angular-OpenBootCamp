import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { SaludoComponent } from './components/saludo/saludo.component';
import { ListaBasicaComponent } from './modules/lists/lista-basica/lista-basica.component';

//Modulo personalizado que exporta componentes de tipo lista
import { ListsModule } from './modules/lists/lists.module';
import { ListaContactosComponent } from './components/lista-contactos/lista-contactos.component';
import { LoginFormComponent } from './components/form/login-form/login-form.component';

@NgModule({
  declarations: [
    AppComponent,
    SaludoComponent,
    ListaContactosComponent,
    LoginFormComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    /*Aqui importamos los modulos que se crean personalizados
    en este caso importamos List.module.ts.
    los modulos que se importan aqui, luego se pueden
    utilizar en cualquier modulo o componente que se encuentre en <<declarations>>
    */
   ListsModule,
   // esto ↓ es para hacer peticiones http, se declara y se importa ↑ 
   HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
