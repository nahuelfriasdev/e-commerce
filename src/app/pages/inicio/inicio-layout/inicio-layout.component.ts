import { CommonModule, TitleCasePipe, UpperCasePipe } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { NavigationEnd, Router, RouterModule, RouterOutlet } from '@angular/router';
import { CarritoService } from '../../../core/services/carrito.service';

@Component({
  selector: 'app-inicio-layout',
  standalone: true,
  imports: [RouterOutlet, RouterModule, CommonModule, TitleCasePipe, UpperCasePipe],
  templateUrl: './inicio-layout.component.html',
  styleUrl: './inicio-layout.component.css'
})
export class InicioLayoutComponent implements OnInit {

  _router = inject(Router);
  _carritoService = inject(CarritoService);

  currentRoute: string = 'nuevo';
  promo: boolean = true
  responsive: boolean = false
  menuActivo: boolean = false

  cantCarrito: number = 0

  // constructor() {
  //   this._carritoService.cantCarrito$.subscribe(count => {
  //     this.cantCarrito = count;
  //   })
  // } -> el costructor se puede usar para cuando no hay un OnInit o algo parecido


  closePromo() {
    this.promo = false
  }

  menu(){
    this.menuActivo = !this.menuActivo
    console.log(this.menuActivo);
  }

  ngOnInit(): void {
    this._router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        let param = event.urlAfterRedirects.split('/')
        this.currentRoute = param[1] == '' ? 'nuevo' : decodeURIComponent(param[1]) // -> decodifico para que se puedan mostrar los caracteres especiales como la ñ
      }
    });

    this._carritoService.cantCarrito$.subscribe(cantidad => {
      this.cantCarrito = cantidad;
    })
  }
}
