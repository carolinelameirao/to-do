import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CadastrarPageRoutingModule } from './cadastrar-routing.module';

import { CadastrarPage } from './cadastrar.page';
import { FirebaseService } from '../services/firebase.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CadastrarPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [CadastrarPage],
  providers: [FirebaseService]
})
export class CadastrarPageModule {}
