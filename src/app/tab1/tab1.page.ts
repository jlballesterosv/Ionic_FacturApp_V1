import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  form: any;

  constructor(private fb: FormBuilder) {}

  ngOnInit(){
    this.crearFormulario();
  }

  crearFormulario(){
    this.form = this.fb.group({
      descripcion:['', Validators.required],
      valor_unitario: ['', Validators.required],
      unidad_medida: ['', Validators.required],
      cantidad_stock: ['', Validators.required],
      categoria: ['', Validators.required]
    })
  }

  guardarProducto(){
    console.log("En este momento estoy guardando")
  }

}
