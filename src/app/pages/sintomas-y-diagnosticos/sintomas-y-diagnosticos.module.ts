import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SintomasYDiagnosticosPageRoutingModule } from './sintomas-y-diagnosticos-routing.module';

import { SintomasYDiagnosticosPage } from './sintomas-y-diagnosticos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SintomasYDiagnosticosPageRoutingModule
  ],
  declarations: [SintomasYDiagnosticosPage]
})
export class SintomasYDiagnosticosPageModule {}
