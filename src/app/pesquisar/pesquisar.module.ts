import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PesquisarPageRoutingModule } from './pesquisar-routing.module';
import { PesquisarPage } from './pesquisar.page';
import { FirebaseService } from '../services/firebase.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PesquisarPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [PesquisarPage],
  providers: [FirebaseService]
})
export class PesquisarPageModule {}
