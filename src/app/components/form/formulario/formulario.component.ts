import { Component, OnInit } from '@angular/core';

// ejemplo de formulario reactivo
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.scss']
})
export class FormularioComponent implements OnInit {

  //Definimos nuestro formulario
  miFormulario: FormGroup = new FormGroup ({ });

  //Injectamos la clase FormBuilder para construir el formulario
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
      //iniciamos los campos del formulario y sus valores por defescto
      this.miFormulario = this.formBuilder.group(
        {
          nombre: '',
          apellidos: '',
          email: '',
          telefono: '',
          direccion: '',
        }
      );

    /*
    Aqui nos suscribimos a los cambios que ocurran en el formulario,
    y los vamos a mostrar por consola.

    Funciones que hacen los formularios:
    * Valid: Campos validos
    * Value: Da todos los campos, objeto con todos los valores
    * Control: Nos ofrece todos los campos de control
    * Get: Obtener un campo especifico
    * Dirty: Para saber si el usuario a tocado o no el formulario
    * Disable: Hace que todos los campos queden desabilitados
    * Anable: Campos habilitados
    * Error: ...
    * ValueChanges: Nos da un observable
    */
        this.miFormulario.valueChanges.subscribe(
          console.log
        ) //De aqui vamos al html

        /*this.miFormulario.valueChanges.subscribe((valor) => {
          console.log
        })*///esto es lo mismo de arriba
  }

}
