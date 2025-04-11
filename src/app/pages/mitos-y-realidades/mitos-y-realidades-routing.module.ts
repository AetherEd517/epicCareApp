import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MitosYRealidadesPage } from './mitos-y-realidades.page';

const routes: Routes = [
  {
    path: '',
    component: MitosYRealidadesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MitosYRealidadesPageRoutingModule {}
