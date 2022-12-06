import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReservesPage } from './reserves.page';

const routes: Routes = [
  {
    path: 'reserves',
    component: ReservesPage,
    children: [
      {
        path: 'parquedero',
        loadChildren: () => import('../parquedero/parquedero.module').then(m => m.ParquederoPageModule)
      },
      {
        path: 'hospedaje',
        loadChildren: () => import('../hospedaje/hospedaje.module').then(m => m.HospedajePageModule)
      },

      {
        path: '',
        redirectTo: '/reserves/parquedero',
        pathMatch: 'full'
      }
    ]
  }
];




@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReservesPageRoutingModule { }
