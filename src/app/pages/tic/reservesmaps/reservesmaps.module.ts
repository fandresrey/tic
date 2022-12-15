import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ReservesmapsPageRoutingModule } from './reservesmaps-routing.module';

import { ReservesmapsPage } from './reservesmaps.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReservesmapsPageRoutingModule
  ],
  declarations: [ReservesmapsPage]
})
export class ReservesmapsPageModule {}
