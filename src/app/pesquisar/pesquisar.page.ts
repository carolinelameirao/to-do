import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, FormGroupDirective, Validators } from '@angular/forms';

import { ToastController } from '@ionic/angular';
import { FirebaseService } from '../services/firebase.service';

@Component({
  selector: 'app-pesquisar',
  templateUrl: './pesquisar.page.html',
  styleUrls: ['./pesquisar.page.scss'],
})
export class PesquisarPage implements OnInit {
  pformGroup!: FormGroup;
  @ViewChild('pformGgroup') pformGroupDirective!: FormGroupDirective;

  constructor(
    private toastController: ToastController,
    private firebaseService: FirebaseService) { }

  ngOnInit(): void {
    this.pformGroup = new FormGroup({
      'categoria': new FormControl('', Validators.required)
    });
  }

  pesquisar(listar: any) {
    this.firebaseService.buscar(listar.categoria).subscribe({
      next:(resultado) => {
        if(!resultado) {
          this.presentToast(`Categoria não encontrada: ${listar.categoria}`);
        } else {
          console.log(resultado);
        }
      },
      error: (err) => {
        console.error(err);
        this.presentToast(`Serviço indisponível!`);
      }
    });
    this.pformGroup.reset();
  }

  async presentToast(msg: string) {
    const toast = await this.toastController.create({
      message: msg,
      duration: 1500,
      position: 'middle'
    });

    await toast.present();
  }
}
