import { Component } from '@angular/core';

@Component({
  selector: 'app-root', //Esto el nombre que tiene que renderizar o mostrar en el index.html para que sea mostrado en vista
  templateUrl: './app.component.html', //Esto es la plantilla 
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'HolaMundo';
  nombre = 'Guedys'
}
