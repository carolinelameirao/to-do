import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { Observable } from 'rxjs';

import { Tarefa } from '../models/tarefa.model';
import { FirebaseService } from '../services/firebase.service';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.page.html',
  styleUrls: ['./listar.page.scss'],
})
export class ListarPage {

  tarefas!: Observable<Tarefa[]>;

  constructor(
    private firebaseService: FirebaseService,
    private router: Router) { 
      this.tarefas = this.firebaseService.listar();
    }

  novaTarefa() {
    this.router.navigateByUrl('/header/cadastrar');
  }

  buscar() {
    this.router.navigateByUrl('/header/pesquisar');
  }
}
