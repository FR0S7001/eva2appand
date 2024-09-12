import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RestarpassPage } from './restarpass.page';

const routes: Routes = [
  {
    path: '',
    component: RestarpassPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RestarpassPageRoutingModule {}
