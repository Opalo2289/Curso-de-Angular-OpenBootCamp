import { Component, OnInit } from '@angular/core';

//Aqui de declaran las exportaciones 
//creamos un tipo base para el ejemplo del ngFor de Lista-Basica
export type Producto = {
  nombre: string;
  precio: number;
  descripcion: string
}

@Component({
  selector: 'app-lista-basica',
  templateUrl: './lista-basica.component.html',
  styleUrls: ['./lista-basica.component.scss']
})
export class ListaBasicaComponent implements OnInit {
 
// AQUI DE DECLARAN LAS VARIABLES:

//Variable 1
  cargando: boolean = true; // para hacer un renderizado condicional
  
//Variable 2
  listaElementos: Producto[] = [

    {
      nombre: 'leche',
      precio: 10,
      descripcion: 'Leche entera'
    },
    {
      nombre: 'Carne',
      precio: 20,
      descripcion: 'Carne de cerdo'
    }

  ];

//Variable 3
  
  opcion: number = 0; //esta opcion va a cambiar


//AQUI SE DECLARAN LOS METODOS()

  ngOnInit(): void {

  }

  cambiarCargando() {
    this.cargando = !this.cargando
  }

  escogerOpcion(opcionEscogida: number) {
    this.opcion = opcionEscogida; //Dado que el valor cambia, implica un cambio en los elementos renderizados
  }

}
