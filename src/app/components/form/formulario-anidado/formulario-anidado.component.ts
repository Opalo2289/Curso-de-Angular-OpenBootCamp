import { Component, OnInit } from '@angular/core';

//Importamos de ReactiveForm para crear un formulario Anidado
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-formulario-anidado',
  templateUrl: './formulario-anidado.component.html',
  styleUrls: ['./formulario-anidado.component.scss']
})
export class FormularioAnidadoComponent implements OnInit {

  miFormularioAnidado: FormGroup = new FormGroup ({ })
  
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    //Agrupacion para telefonos//se puede utilizar una variable que sirva pa ambos
    const telefonoFijo = this.formBuilder.group(
      {
        prefijo: '',
        numero: '',

      }
    );
    
    const telefonoMovil = this.formBuilder.group(
      {
        prefijo: '',
        numero: '',

      }
    );
    
    //Agrupacion del formulario que contiene dos agrupaciones
    this.miFormularioAnidado = this.formBuilder.group({
      telefonoFijo: telefonoFijo,
      telefonoMovil: telefonoMovil
    })
  }
}
