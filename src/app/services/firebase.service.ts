import { Injectable } from '@angular/core';
import { collection, collectionData, deleteDoc, doc, Firestore, setDoc } from '@angular/fire/firestore';
import { map, Observable } from 'rxjs';

import { Tarefa } from '../models/tarefa.model';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  constructor(private firestore: Firestore) { }

  salvar(tarefa: Tarefa): Promise<void> {
    const documento = doc(collection(this.firestore, 'listar'));
    return setDoc(documento, tarefa);
  }

  listar(): Observable<Tarefa[]> {
    const tarefaCollection = collection(this.firestore, 'listar');
    return collectionData(tarefaCollection, {idField: `id`})
      .pipe(
        map(resultado => resultado as Tarefa[])
      );
  }

  buscar(categoria: string): Observable<Tarefa[]> {
    const tarefaList = this.listar();
    return tarefaList.pipe(
      map(listar => listar.filter(listar => {
        const fullCategoria = listar.categoria;
        return fullCategoria.toLowerCase().match(categoria.toLowerCase());
      }))
    )
  }

  atualizar(tarefa: Tarefa): Promise<void> {
    const documento = doc(this.firestore, 'listar', tarefa?.id);
    const { id, ...dados } = tarefa;
    return setDoc(documento, dados);
  }

  deletar(id: string): Promise<void> {
    const documento = doc(this.firestore, 'listar', id);
    return deleteDoc(documento);
  }
}
