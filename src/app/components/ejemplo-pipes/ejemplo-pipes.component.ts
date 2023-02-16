import { Component, OnInit } from '@angular/core';
import { IContacto } from 'src/app/models/contacto.interfase';
import { IJugador } from 'src/app/models/jugador.interface';

// Ejemplo Pipes de fechas

@Component({
  selector: 'app-ejemplo-pipes',
  templateUrl: './ejemplo-pipes.component.html',
  styleUrls: ['./ejemplo-pipes.component.scss']
})
export class EjemploPipesComponent implements OnInit {

  dob: Date = new Date(1991,9,14); //Las fechas comienzan en 0
  cambio: boolean = true;
  nombre: string = 'Guedys';
  numero_PI: number = 3.1415926535897
  precioCarrito: number = 100
  persona: IContacto = {

    id: 0,
    nombre: 'Guedys',
    apellidos: 'Angola',
    email: '@Maestre',
    edad: 20

  }

  cantidad: number = 0.3512
  textoLargo: string = 'loremasnlajsomlasjoasnodnhaosljndopianskndandipuaspd'

  //Ejemplo para pipe Calular Puntuacion
  jugador1: IJugador = {
    nombre: 'Guedys',
    puntos: [10, 30, 40, 0]
  }
  jugador2: IJugador = {
    nombre: 'Alfredo',
    puntos: [0, 80, 10, 5],
  }
  
  constructor() { }

  ngOnInit(): void {
    
  }


  //Esto es para ver los tipos de formatos que existen
  get dateFormat() {
    //operador ternario
    return this.cambio ? "shortDate" : "fullDate"
  }


  //Metodo para cambiar el formato de los PIPES
  cambiarFormato() {
    this.cambio = !this.cambio
  }


}
