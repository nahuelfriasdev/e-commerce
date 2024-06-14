import { CurrencyPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CarritoService } from '../../../core/services/carrito.service';

@Component({
  selector: 'app-mujeres',
  standalone: true,
  imports: [CurrencyPipe, RouterLink],
  templateUrl: './mujeres.component.html',
  styleUrl: './mujeres.component.css'
})
export class MujeresComponent {
  _carritoService = inject(CarritoService)

  item: number = 1

  agregarAlCarrito() {
    this._carritoService.agregarAlCarrito();
  }
}
