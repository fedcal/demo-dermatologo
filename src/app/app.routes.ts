import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/home/home.component').then((m) => m.HomeComponent),
    title: 'Studio Dermatologico Russo — Dermatologia clinica ed estetica Bari'
  },
  {
    path: 'servizi',
    loadComponent: () => import('./pages/servizi/servizi.component').then((m) => m.ServiziComponent),
    title: 'Servizi — Studio Dermatologico Russo'
  },
  {
    path: 'chi-siamo',
    loadComponent: () => import('./pages/chi-siamo/chi-siamo.component').then((m) => m.ChiSiamoComponent),
    title: 'Chi siamo — Studio Dermatologico Russo'
  },
  {
    path: 'tecnologie',
    loadComponent: () => import('./pages/tecnologie/tecnologie.component').then((m) => m.TecnologieComponent),
    title: 'Tecnologie — Studio Dermatologico Russo'
  },
  {
    path: 'contatti',
    loadComponent: () => import('./pages/contatti/contatti.component').then((m) => m.ContattiComponent),
    title: 'Prenota una visita — Studio Dermatologico Russo'
  },
  {
    path: '**',
    redirectTo: ''
  }
];
