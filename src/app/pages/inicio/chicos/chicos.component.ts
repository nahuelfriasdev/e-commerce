import { CurrencyPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CarritoService } from '../../../core/services/carrito.service';

@Component({
  selector: 'app-chicos',
  standalone: true,
  imports: [CurrencyPipe, RouterLink],
  templateUrl: './chicos.component.html',
  styleUrl: './chicos.component.css'
})
export class ChicosComponent {
  _carritoService = inject(CarritoService)

  item: number = 1

  agregarAlCarrito(titulo:string, img:string, precio:number) {
    this._carritoService.agregarAlCarrito(titulo, img ,precio);
  }
}
