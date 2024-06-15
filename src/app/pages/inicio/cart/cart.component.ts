import { Component, OnInit, inject } from '@angular/core';
import { CarritoService } from '../../../core/services/carrito.service';
import { Producto } from '../../../core/models/product.model';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent{
  _carritoService = inject(CarritoService)

  contenidoCarrito: Array<Producto> = []
  total: number = 0;
  i: number = 0;

  constructor() {
    this._carritoService.contenidoCarrito$.subscribe(productos => {
      this.contenidoCarrito = productos;
      const precios = this.contenidoCarrito.map(producto => producto.precio);
      console.log(precios);
      this.total += precios[this.i]
    });
  }

  eliminarDelCarrito(index: number) {
    this._carritoService.eliminarDelCarrito(index);
  }
}
