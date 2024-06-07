import { CommonModule, TitleCasePipe } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router, RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-inicio-layout',
  standalone: true,
  imports: [RouterOutlet, RouterModule, CommonModule, TitleCasePipe],
  templateUrl: './inicio-layout.component.html',
  styleUrl: './inicio-layout.component.css'
})
export class InicioLayoutComponent implements OnInit {

  _router = inject(Router);
  currentRoute: string = 'nuevo';

  ngOnInit(): void {
    this._router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        let param = event.urlAfterRedirects.split('/')
        this.currentRoute = param[1] == '' ? 'nuevo' : param[1]
        console.log(this.currentRoute);
      }
    });
  }
  
}
