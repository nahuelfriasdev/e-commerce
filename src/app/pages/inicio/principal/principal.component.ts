import { CurrencyPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CarritoService } from '../../../core/services/carrito.service';

@Component({
  selector: 'app-principal',
  standalone: true,
  imports: [CurrencyPipe, RouterLink],
  templateUrl: './principal.component.html',
  styleUrl: './principal.component.css'
})
export class PrincipalComponent {

  _carritoService = inject(CarritoService)

  item: number = 1

  agregarAlCarrito() {
    this._carritoService.agregarAlCarrito();
  }

}
