import { CommonModule, TitleCasePipe, UpperCasePipe } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router, RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-inicio-layout',
  standalone: true,
  imports: [RouterOutlet, RouterModule, CommonModule, TitleCasePipe, UpperCasePipe],
  templateUrl: './inicio-layout.component.html',
  styleUrl: './inicio-layout.component.css'
})
export class InicioLayoutComponent implements OnInit {

  _router = inject(Router);
  currentRoute: string = 'nuevo';

  promo: boolean = true
  responsive: boolean = false
  menuActivo: boolean = false

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
  }
}
