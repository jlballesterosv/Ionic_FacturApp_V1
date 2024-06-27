import { Component } from '@angular/core';
import { ProductosService } from '../services/productos.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  productos:any = [];
  constructor(public productosService:ProductosService) {}

  ngOnInit(){
    this.cargarProductos();
  }
  
  async cargarProductos() {
    this.productosService.getProductos().subscribe(
      (res) => {
        this.productos.push(res);
        console.log(this.productos)
      },
      (err) => {
        console.log(err);
      }
    )
  }

}
