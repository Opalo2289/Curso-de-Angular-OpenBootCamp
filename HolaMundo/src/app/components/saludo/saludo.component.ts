import { Component, OnInit, Input, Output, EventEmitter, OnDestroy, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-saludo',
  templateUrl: './saludo.component.html',
  styleUrls: ['./saludo.component.scss']
})
export class SaludoComponent implements OnInit, OnDestroy, OnChanges {
 
//aqui deben declararce las variables. ejemplo const

@Input() nombre: string = 'Anonimo' //del padre al hijo
@Output() mensajeEmiter: EventEmitter<string> = new EventEmitter<string>()  //sirve para gestionar eventos de abajo hacia arriba,  hijo al padre, el componente superiro debe siempre tener la logica


//Esto viene del html y va hacia allá, siempre en formato cabalgates y si es en css es con - ejemplo font-size
myStyle: object = {
  color: 'blue',
  fontSize: '20px',
  fontWeigth: 'bold' 
}


  constructor() { }

  ngOnInit(): void {
    //instrucciones previas a la renderizacion del componente
    console.log('ngOnInit del componente saludo')
  }

  
  ngOnChanges(changes: SimpleChanges): void {
    console.log('CAMBIO: valor anterior:', changes['nombre'].previousValue);
    console.log('ngOnChange el componente recibe cambios', changes['nombre'].currentValue);
  }

  ngOnDestroy(): void {
    console.log('ngOnDestroy el componente va a desaparecer');
  }

  

  /*aqui se ve en que consiste los metodos, y esto es lo que desencadena los eventos. 
  en este caso vamos a hacer un metodo para gestionar una alerta.
  alertaSaludo(): void {
    alert (`hola, ${this.nombre}, alerta despachada desde un click de boton`);
  }*/

  //ahora utilizando el ejemplo modificado de arriba vamos a gestionar un evento de tipo click
  //en el DOM y enviar un texto al componente padre, despues esto se debe pintar en el html
  enviarMensajeAlPadre(): void {
    this.mensajeEmiter.emit (`hola, ${this.nombre}, alerta despachada desde un click de boton`); //no se puede ejecutar un object porque en el @output esta asignado como <string>
  }

}
