import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Producto } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})

export class CarritoService {
  private cantCarritoSubject = new BehaviorSubject<number>(0);
  private localStorageKey = 'carrito';
  private contenidoCarritoSubject = new BehaviorSubject<Producto[]>(this.getProductos());

  cantCarrito$ = this.cantCarritoSubject.asObservable();
  contenidoCarrito$ = this.contenidoCarritoSubject.asObservable();

  constructor() {
    const productos = this.getProductos();
    this.cantCarritoSubject.next(productos.length);
  }

  getProductos(): Producto[]{
    return JSON.parse(localStorage.getItem(this.localStorageKey) as string) || []
  }


  agregarAlCarrito(titulo: string, img:string, precio:number) {
    const productos = this.getProductos();
    productos.push({titulo, img, precio })
    localStorage.setItem(this.localStorageKey, JSON.stringify(productos))
    this.cantCarritoSubject.next(productos.length);
    this.contenidoCarritoSubject.next(productos);
  }

  eliminarDelCarrito(index:number) {
    const productos = this.getProductos();
    productos.splice(index, 1);
    localStorage.setItem(this.localStorageKey, JSON.stringify(productos))
    this.cantCarritoSubject.next(productos.length);
    this.contenidoCarritoSubject.next(productos);
  }


}
