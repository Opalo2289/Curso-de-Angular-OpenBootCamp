/*
*¿vamos a representar informacion que es independiente de la plantilla osea que no tiene que ver solo para un componente?
R: por ejemplo, una lista de contactos se puede representar en la vista en formato lista o tabla pero el conjunto de datos es el mismo.
   de esta manera esa iformacion va a ser compartida para los diferentes componentes. aqui es momento de sacar la logica hacer un servicio e injectarlo como dependencia

* ¿necesitamos que la app represente la info de diferentes maneras?
R: tener en cuenta la persistencia de la informacion, esto tiene que ver con el estado de la app, es informacion que queremos mantener siempre disponible.
*/

import { Injectable } from '@angular/core';
import { observable, Observable } from 'rxjs';

import { CONTACTOS } from '../mocks/contactos.mock';
import { IContacto } from '../models/contacto.interfase';

@Injectable({
  providedIn: 'root' //esto quiere decir que es a nivel de raiz, osea que todos los componentes lo pueden utilizar
})
export class ContactoService {

  constructor() { }

  /*
  *Lo primero es crear un metodo. y va a ser accesible para los que tengan injectada la instancia ContactoService.
  *para este ejemplo se crea en la carpeta models una lista de datos inventados y desde alli se exporta.
  *Importamos la lista de contactos MOCKS ↑.
  *Devolver el conjunto de datos
  */

  //AQUI VA EJEMPLO RETIRADO #2

  /*
  *Se trabajará aqui con una promesa (que debe devolver una promesa, no los DATOS de CONTACTOS especificamente)
  */
  obtenerContactos(): Promise <IContacto[]> {
    return Promise.resolve(CONTACTOS); //hay que señalar el tipo de promesa y lo que esperamos que nos devuelva
  }




  /*Otro metodo o funcionalidad puede ser:
  *Buscar el contacto por ID dentro de la lista de CONTACTOS mockeados
    1. creas la variable const y buscas con find
  */

  //AQUI VA EJEMPLO RETIRADO #4

  //EJEMPLO RETIRADO #5
/*
*Este metodo lo tomaremos para trabajar con un observable.
Los observables son metodos que van emitiendo nuevos valores cada ves, osea pueden emitir mas de un valor.
1- crear el observable
2. en el componente que este usando este metodo debemos susctribirnos en este caso en lista-contactos.component.ts
*/

  obtenerContactoPorID(id: number): Observable<IContacto> | undefined {

    const contacto = CONTACTOS.find((contacto: IContacto) => contacto.id === id) //(contacto.id === id) es decir: en caso de que contacto.id conincida con id que recibimos por parametro entonces lo devolvemos


    //aqui creamos el observable.
    let observable: Observable<IContacto> = new Observable(observer => { 
      observer.next(contacto) //aqui Emitimos un valor a todo componente que este suscrito a este observable
      observer.complete() //cuando se completa no emitimos mas valores
    })
    if(contacto) {
      return observable; //aqui tenemos que especificar el tipo osea esto ↑ (Observable<IContacto>)
    }else {
      return;
    }
  }
}

/*Realizado estos metodos lo que viene es injectar este servicio a cualquier conponente
  en este caso se injecta a app-lista-contactos
*/
