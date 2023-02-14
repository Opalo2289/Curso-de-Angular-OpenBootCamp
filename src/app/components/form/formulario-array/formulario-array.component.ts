import { Component, OnInit } from '@angular/core';

import { FormArray, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-formulario-array',
  templateUrl: './formulario-array.component.html',
  styleUrls: ['./formulario-array.component.scss']
})
export class FormularioArrayComponent implements OnInit {

  miformularioArray: FormGroup = new FormGroup ({ });
  
  
  
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
   this.miformularioArray = this.formBuilder.group({
    nombre: '',
    apellidos: '',
    telefonos: this.formBuilder.array([]) //Inicializamos la lista de telefonos vacia
   }) 
  }

  /*
  (metodo Getter para obtener el formArray de la lista de telefonos[])Los que estamos buscando es la lista de telefonos de arriba
  */
  get telefonosFormularios(): FormArray {
    return this.miformularioArray.get('telefonos') as FormArray
  }

  //Metodo para añadir Telefonos a la lista
  anadirTelefono() {
    //Creamos un grupo de telefono
    const telefonoNuevo = this.formBuilder.group({
      prefijo: '',
      numero: ''
    });

    //Añadimos el grupo a la lista de telefonos
    this.telefonosFormularios.push(telefonoNuevo);
  }

  //Metodo para eliminar telefonos de la lista
  eliminarTelefono(index: number) {
    this.telefonosFormularios.removeAt(index)
  }

}
