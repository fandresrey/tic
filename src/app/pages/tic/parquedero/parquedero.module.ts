import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ParquederoPageRoutingModule } from './parquedero-routing.module';

import { ParquederoPage } from './parquedero.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ParquederoPageRoutingModule
  ],
  declarations: [ParquederoPage]
})
export class ParquederoPageModule {}
