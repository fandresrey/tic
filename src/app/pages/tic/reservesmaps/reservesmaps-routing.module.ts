import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReservesmapsPage } from './reservesmaps.page';

const routes: Routes = [
  {
    path: '',
    component: ReservesmapsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReservesmapsPageRoutingModule {}
