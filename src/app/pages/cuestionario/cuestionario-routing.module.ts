import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CuestionarioPage } from './cuestionario.page';

const routes: Routes = [
  {
    path: '',
    component: CuestionarioPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CuestionarioPageRoutingModule {}
