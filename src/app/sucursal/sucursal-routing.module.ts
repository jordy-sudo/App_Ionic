import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SucursalPage } from './sucursal.page';

const routes: Routes = [
  {
    path: '',
    component: SucursalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SucursalPageRoutingModule {}
