import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {

constructor(private authService: AuthService) { }

ngOnInit(): void {
  
   //Aqui pasamos los parametros y la funcion que tiene que hacer
   this.authService.login('eve.holt@reqres.in','cityslicka').subscribe(
    (Response) => {
    console.log('Respuesta de login', Response);
    if(Response.token) sessionStorage.setItem('Token', Response.token) //asi de accede al token (el token es el valor)
  },
  (error) => console.error(`Ha ocurrido un error en el proceso de login: ${error}`),
  () => console.info('Se ha completado la llamada de login de REQRES')
  );
 }
}

//la response es de tipo http(averiguar mas sobre esto, tambien se puede devolver data, status quo, body header)
//Por ultimo lo que debemos hacer es pintar el selector en el componente html principal
//*cuando ya tenemos todo listo debemos acceder al token, lo guardamos en session store



