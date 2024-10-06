import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ControllerPage } from './controller.page';

const routes: Routes = [
  {
    path: '',
    component: ControllerPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ControllerPageRoutingModule {}
