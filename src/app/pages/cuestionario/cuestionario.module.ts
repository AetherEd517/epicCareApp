import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CuestionarioPageRoutingModule } from './cuestionario-routing.module';

import { CuestionarioPage } from './cuestionario.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CuestionarioPageRoutingModule
  ],
  declarations: [CuestionarioPage]
})
export class CuestionarioPageModule {}
