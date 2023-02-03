import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListaBasicaComponent } from './lista-basica/lista-basica.component'; // es un modulo basico



@NgModule({
  declarations: [
    ListaBasicaComponent //los modulos o componentes que queramos compartir debemos exportarlos //son modulos declarados para este componente en concreto <<MOdulo => Componente => appModule
  ], 
  imports: [
    CommonModule
  ],
  exports: [
    ListaBasicaComponent
  ]
})
export class ListsModule { }
