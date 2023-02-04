//Este servicio se crea para hacer una peticion Http

/* Vamos a hacer un proceso de login y logout
* 1- Tenemos que inyectar el servicio httpClient en el constructor
* 2- No la deberiamos hacer dentro de un componente, las hacemos en un servicio, y este comparte con los componentes que lo necesiten
* 3- hay que generarar un componente en este caso un formulario de login, para el ejemplo se crea un loginForm
* 4- injectamos el servicio en el ngOnInit del componente
*/

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  constructor(private http: HttpClient ) { }

  /*
  *El metodo que vamos a hacer para el login es un observable
   *Tener en cuenta tipar la solucion
  */
  login(email: string, password: string): Observable<any> {

    let body = {
      email: email,
      password: password
    }

    //Devolvemos la respuesta del observable cuando la peticion http se complete, el componente suscrito accedera al token de login,
    //y despues lo podemos guardar en el sesionEstory, (podemos hacer una con django, Node)
    return this.http.post('https://reqres.in/api/login', body);
 
  }
}

/*
*Aquel componente que necesite de este metodo tendria que injectar este servicio
y tendria que hacer una llamada el metodo de login: le podemos pasar el tipo de respuesta
*Json
*Parametros
*contextos
*Cabeceras

yo envio algo a una ruta en este caso a: https://reqres.in/api/login  a esta ruta le quiero mandar el body, y lo que devuelvo es el observable
*/
