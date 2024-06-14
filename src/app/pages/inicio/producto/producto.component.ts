import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-producto',
  standalone: true,
  imports: [],
  templateUrl: './producto.component.html',
  styleUrl: './producto.component.css'
})
export class ProductoComponent implements OnInit{

  producto: string = ''

  private _route = inject(ActivatedRoute)

  ngOnInit(): void {
    this._route.params.subscribe(params => {
      console.log(params['id']);
      this.producto = params['id'];
    })
  }

}
