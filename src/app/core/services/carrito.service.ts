import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CarritoService {

  private cantCarritoSubject = new BehaviorSubject<number>(0);

  cantCarrito$ = this.cantCarritoSubject.asObservable();

  agregarAlCarrito() {
    const cantidadActual = this.cantCarritoSubject.value;
    this.cantCarritoSubject.next(cantidadActual + 1);
  }

  eliminarDelCarrito() {
    const cantidadActual = this.cantCarritoSubject.value;
    this.cantCarritoSubject.next(cantidadActual - 1);
  }


}
