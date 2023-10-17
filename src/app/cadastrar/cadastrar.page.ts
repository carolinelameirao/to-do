import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, FormGroupDirective, Validators } from '@angular/forms';
import { FirebaseService } from '../services/firebase.service';
import { Tarefa } from '../models/tarefa.model';

@Component({
  selector: 'app-cadastrar',
  templateUrl: './cadastrar.page.html',
  styleUrls: ['./cadastrar.page.scss'],
})
export class CadastrarPage implements OnInit {

  tarefaFormGroup!: FormGroup;
  @ViewChild('tarefaFormGroupDirective') tarefaFormGroupDirective!: FormGroupDirective;

  constructor(private firebaseService: FirebaseService) { }

  ngOnInit() {
    this.tarefaFormGroup = new FormGroup({
      'tarefa': new FormControl('', Validators.required),
      'categoria': new FormControl('', Validators.required)
    });
  }

  resetarCriarTarefa() {
    this.tarefaFormGroupDirective.reset();
  }

  criarTarefa(values: any) {
    let novaTarefa: Tarefa = { ...values };
    this.firebaseService.salvar(novaTarefa);
    this.resetarCriarTarefa();
  }
}
