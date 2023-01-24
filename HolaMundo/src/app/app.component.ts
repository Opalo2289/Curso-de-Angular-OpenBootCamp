import { Component } from '@angular/core';

@Component({
  selector: 'app-root', //Esto el nombre que tiene que renderizar o mostrar en el index.html para que sea mostrado en vista
  templateUrl: './app.component.html', //Esto es la plantilla 
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'HolaMundo';
  usuario = '@Enrique'  //el ts es el componente padre por lo tanto

  //este evento se utiliza para recibir el el mensaje del hijo y ejecutará cuando (saludo.components) se pulse un boton
  //el nombre del evento lo crea uno y se lo pasa al app.component.html
  recibirMensajeDelHijo(event: string) {
    alert(event)
  }

}
