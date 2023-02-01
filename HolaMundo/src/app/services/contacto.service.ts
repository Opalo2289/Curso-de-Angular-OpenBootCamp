/*
*¿vamos a representar informacion que es independiente de la plantilla osea que no tiene que ver solo para un componente?
R: por ejemplo, una lista de contactos se puede representar en la vista en formato lista o tabla pero el conjunto de datos es el mismo.
   de esta manera esa iformacion va a ser compartida para los diferentes componentes. aqui es momento de sacar la logica hacer un servicio e injectarlo como dependencia

* ¿necesitamos que la app represente la info de diferentes maneras?
R: tener en cuenta la persistencia de la informacion, esto tiene que ver con el estado de la app, es informacion que queremos mantener siempre disponible.
*/

import { Injectable } from '@angular/core';

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

  obtenerContactos(): IContacto[] {
    return CONTACTOS; //Aqui de maneja de manera sincrona. nos devuelve un listado de contactos
  }

  /*Otro metodo o funcionalidad puede ser:
  *Buscar el contacto por ID dentro de la lista de CONTACTOS mockeados
    1. creas la variable const y buscas con find
  */

  obtenerContactoPorID(id: number): IContacto | undefined {

    const contacto = CONTACTOS.find((contacto: IContacto) => contacto.id === id) //(contacto.id === id) es decir: en caso de que contacto.id conincida con id que recibimos por parametro entonces lo devolvemos

    if(contacto) {
      return contacto;
    }else {
      return;
    }
  }
}

/*Realizado estos metodos lo que viene es injectar este servicio a cualquier conponente
  en este caso se injecta a app-lista-contactos
*/
