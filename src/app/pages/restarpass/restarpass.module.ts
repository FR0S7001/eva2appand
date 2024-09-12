import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RestarpassPageRoutingModule } from './restarpass-routing.module';

import { RestarpassPage } from './restarpass.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RestarpassPageRoutingModule
  ],
  declarations: [RestarpassPage]
})
export class RestarpassPageModule {}
