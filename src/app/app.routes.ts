import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./pages/inicio/inicio.routes').then(m => m.INICIO_ROUTES)
  }
];
