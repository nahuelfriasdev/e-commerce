import { Routes } from '@angular/router';
import { InicioLayoutComponent } from './inicio-layout/inicio-layout.component';
import { PrincipalComponent } from './principal/principal.component';
import { MujeresComponent } from './mujeres/mujeres.component';
import { HombresComponent } from './hombres/hombres.component';
import { ChicosComponent } from './chicos/chicos.component';
import { DeportesComponent } from './deportes/deportes.component';
import { LoginComponent } from '../auth/login/login.component';
import { CartComponent } from './cart/cart.component';

export const INICIO_ROUTES: Routes = [
  {
    path: '', component: InicioLayoutComponent, children: [
      {path: '', component: PrincipalComponent},
      {path: 'mujeres', component: MujeresComponent},
      {path: 'hombres', component: HombresComponent},
      {path: 'niños', component: ChicosComponent},
      {path: 'deportes', component: DeportesComponent},
      {path: 'carrito', component: CartComponent},
      {path: 'auth', component: LoginComponent}
    ]
    
  }

  
];
