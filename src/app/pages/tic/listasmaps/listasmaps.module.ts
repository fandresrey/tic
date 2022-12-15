import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListasmapsPageRoutingModule } from './listasmaps-routing.module';

import { ListasmapsPage } from './listasmaps.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListasmapsPageRoutingModule
  ],
  declarations: [ListasmapsPage]
})
export class ListasmapsPageModule {}
