import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabsPage } from './tabs.page';


const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children: [
      {
        path: 'home',
        loadChildren: () => import('./../../home/home.module').then( m => m.HomePageModule)
      },
      {
        path: 'inicio',
        loadChildren: () => import('./../../pages/inicio/inicio.module').then( m => m.InicioPageModule)
      },
      {
        path: 'info',
        loadChildren: () => import('./../../pages/info/info.module').then( m => m.InfoPageModule)
      },
      {
        path: 'sintomas-y-diagnosticos',
        loadChildren: () => import('./../../pages/sintomas-y-diagnosticos/sintomas-y-diagnosticos.module').then( m => m.SintomasYDiagnosticosPageModule)
      },
      {
        path: 'primeros-auxilios',
        loadChildren: () => import('./../../pages/primeros-auxilios/primeros-auxilios.module').then( m => m.PrimerosAuxiliosPageModule)
      },
      {
        path: 'mitos-y-realidades',
        loadChildren: () => import('./../../pages/mitos-y-realidades/mitos-y-realidades.module').then( m => m.MitosYRealidadesPageModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule {}
