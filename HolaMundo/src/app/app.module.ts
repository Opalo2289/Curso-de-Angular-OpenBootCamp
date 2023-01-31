import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SaludoComponent } from './components/saludo/saludo.component';
import { ListaBasicaComponent } from './modules/lists/lista-basica/lista-basica.component';

//Modulo personalizado que exporta componentes de tipo lista
import { ListsModule } from './modules/lists/lists.module';

@NgModule({
  declarations: [
    AppComponent,
    SaludoComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    /*Aqui importamos los modulos que se crean personalizados
    en este caso importamos List.module.ts.
    los modulos que se importan aqui, luego se pueden
    utilizar en cualquier modulo o componente que se encuentre en <<declarations>>
    */
   ListsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
