import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SucursalPageRoutingModule } from './sucursal-routing.module';

import { SucursalPage } from './sucursal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SucursalPageRoutingModule
  ],
  declarations: [SucursalPage]
})
export class SucursalPageModule {}
