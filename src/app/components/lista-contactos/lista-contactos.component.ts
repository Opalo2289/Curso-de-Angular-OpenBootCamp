import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { IContacto } from 'src/app/models/contacto.interfase';
import { ContactoService } from 'src/app/services/contacto.service';

@Component({
  selector: 'app-lista-contactos',
  templateUrl: './lista-contactos.component.html',
  styleUrls: ['./lista-contactos.component.scss']
})
export class ListaContactosComponent implements OnInit, OnDestroy {

  //Creamos la lista de contactos(pero esta es una variable que hay que transformar en el OnInit)
  listaContactos: IContacto[] = [];
  contactoSeleccionado: IContacto | undefined;

  //Suscripcion de servicios
  subscription: Subscription | undefined //cuando se hace esto es necesario guardarlo en metododo, en este caso en obtenerContacto(id: number) usando this.subscription 

  //Para hacer uso de un servicio de debe inyectar en el constructor. debe estar declaro en provaiders root osea en la raiz
  constructor(private contactoService: ContactoService) { } //el constructor es solo para inicializacion de valores


//EJEMPLO RETIRADO #3
ngOnInit(): void {
  //Obtener la lista de contactos que nos brinda el servicio

  /*PARA TRABAJAR CON UNA PROMESA 
  *usas 3 opciones .then, .catch, .finally
  */
  this.contactoService.obtenerContactos()
    .then((lista: IContacto[]) => this.listaContactos = lista)
    .catch((error) => console.error(`Ha habido un error al recuperar la lista de contactos: ${error}`))
    .finally(() => console.log('peticion de lista de contactos terminada'));
  /*
  *Despues de esto ↑ hay que pintarlo usando el selector ↑ en el componente principal html
  */
}



//PARTE DE EJEMPLO RETIRADO #5
//debo siempre especificar el parametro, en este caso es id:number
obtenerContacto(id: number) {
//console.log(`Obtener info del contacto ${id}`);
this.subscription = this.contactoService.obtenerContactoPorID(id)?.subscribe (
  (contacto: IContacto) => this.contactoSeleccionado = contacto)
}

/*
*Como aqui trabajamos con un observable, debemos tener en cuenta implementar el OnDestroy para desuscribirnos
*/

ngOnDestroy(): void {
  this.subscription?.unsubscribe
}

}

