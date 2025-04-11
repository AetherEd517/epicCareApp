import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SintomasYDiagnosticosPage } from './sintomas-y-diagnosticos.page';

const routes: Routes = [
  {
    path: '',
    component: SintomasYDiagnosticosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SintomasYDiagnosticosPageRoutingModule {}
