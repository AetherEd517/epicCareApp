import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PrimerosAuxiliosPage } from './primeros-auxilios.page';

const routes: Routes = [
  {
    path: '',
    component: PrimerosAuxiliosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PrimerosAuxiliosPageRoutingModule {}
