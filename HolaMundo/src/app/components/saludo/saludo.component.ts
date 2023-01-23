import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-saludo',
  templateUrl: './saludo.component.html',
  styleUrls: ['./saludo.component.scss']
})
export class SaludoComponent implements OnInit {
 
//aqui deben declararce las variables.

@Input() nombre: string = 'Anonimo'

  constructor() { }

  ngOnInit(): void {
    //instrucciones previas a la renderizacion del componente
  }

  //aqui se ve en que consiste los metodos

}
