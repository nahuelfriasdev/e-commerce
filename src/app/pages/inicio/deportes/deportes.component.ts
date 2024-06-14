import { CurrencyPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CarritoService } from '../../../core/services/carrito.service';

@Component({
  selector: 'app-deportes',
  standalone: true,
  imports: [CurrencyPipe, RouterLink],
  templateUrl: './deportes.component.html',
  styleUrl: './deportes.component.css'
})
export class DeportesComponent {
  _carritoService = inject(CarritoService)

  item: number = 1

  agregarAlCarrito() {
    this._carritoService.agregarAlCarrito();
  }
}
