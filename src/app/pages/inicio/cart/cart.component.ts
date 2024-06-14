import { Component, inject } from '@angular/core';
import { CarritoService } from '../../../core/services/carrito.service';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {
  _carritoService = inject(CarritoService)

  eliminarDelCarrito() {
    this._carritoService.eliminarDelCarrito()
  }
}
