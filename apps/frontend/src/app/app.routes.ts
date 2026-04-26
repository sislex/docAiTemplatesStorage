import type { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'templates',
    pathMatch: 'full',
  },
  {
    path: 'templates',
    loadComponent: () =>
      import('./features/templates/templates-page.component').then((m) => m.TemplatesPageComponent),
  },
];
