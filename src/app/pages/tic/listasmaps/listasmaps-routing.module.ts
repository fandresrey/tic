import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListasmapsPage } from './listasmaps.page';

const routes: Routes = [
  {
    path: '',
    component: ListasmapsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListasmapsPageRoutingModule {}
