import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MitosYRealidadesPageRoutingModule } from './mitos-y-realidades-routing.module';

import { MitosYRealidadesPage } from './mitos-y-realidades.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MitosYRealidadesPageRoutingModule
  ],
  declarations: [MitosYRealidadesPage]
})
export class MitosYRealidadesPageModule {}
