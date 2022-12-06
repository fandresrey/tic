import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ParquederoPage } from './parquedero.page';

const routes: Routes = [
  {
    path: '',
    component: ParquederoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ParquederoPageRoutingModule {}
