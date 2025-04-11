import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PrimerosAuxiliosPageRoutingModule } from './primeros-auxilios-routing.module';

import { PrimerosAuxiliosPage } from './primeros-auxilios.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PrimerosAuxiliosPageRoutingModule
  ],
  declarations: [PrimerosAuxiliosPage]
})
export class PrimerosAuxiliosPageModule {}
