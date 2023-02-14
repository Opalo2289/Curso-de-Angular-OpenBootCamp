import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { SaludoComponent } from './components/saludo/saludo.component';
import { ListaBasicaComponent } from './modules/lists/lista-basica/lista-basica.component';

//Modulo personalizado que exporta componentes de tipo lista
import { ListsModule } from './modules/lists/lists.module';
import { ListaContactosComponent } from './components/lista-contactos/lista-contactos.component';
import { LoginFormComponent } from './components/form/login-form/login-form.component';
import { FormularioComponent } from './components/form/formulario/formulario.component';
import { FormularioAnidadoComponent } from './components/form/formulario-anidado/formulario-anidado.component';
import { FormularioArrayComponent } from './components/form/formulario-array/formulario-array.component';
import { FormularioValidadoComponent } from './components/form/formulario-validado/formulario-validado.component';
import { MatFormFieldModule } from '@angular/material/form-field';

@NgModule({
  declarations: [
    AppComponent,
    SaludoComponent,
    ListaContactosComponent,
    LoginFormComponent,
    FormularioComponent,
    FormularioAnidadoComponent,
    FormularioArrayComponent,
    FormularioValidadoComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    /*Aqui importamos los modulos que se crean personalizados
    en este caso importamos List.module.ts.
    los modulos que se importan aqui, luego se pueden
    utilizar en cualquier modulo o componente que se encuentre en <<declarations>>
    */
   ListsModule,
   // esto ↓ es para hacer peticiones http, se declara y se importa ↑ 
   HttpClientModule,
  //  importamos reactiveFormModule para trabajar con formularios reactivos
  ReactiveFormsModule,
  //Importamos modulos de Angular Material que usamos en los formulario
  //MatFormFieldModule,
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
