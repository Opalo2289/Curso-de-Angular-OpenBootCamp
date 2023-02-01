import { Component, OnInit } from '@angular/core';
import { IContacto } from 'src/app/models/contacto.interfase';
import { ContactoService } from 'src/app/services/contacto.service';

@Component({
  selector: 'app-lista-contactos',
  templateUrl: './lista-contactos.component.html',
  styleUrls: ['./lista-contactos.component.scss']
})
export class ListaContactosComponent implements OnInit {

  //Creamos la lista de contactos(pero esta es una variable que hay que transformar en el OnInit)
  listaContactos: IContacto[] = []

  //Para hacer uso de un servicio de debe inyectar en el constructor. debe estar declaro en provaiders root osea en la raiz
  constructor(private contactoService: ContactoService ) { } //el constructor es solo para inicializacion de valores

ngOnInit(): void {
  //Obtener la lista de contactos que nos brinda el servicio
  this.listaContactos = this.contactoService.obtenerContactos();

  /*
  *Despues de esto ↑ hay que pintarlo usando el selector ↑ en el componente principal
  */
}

}
