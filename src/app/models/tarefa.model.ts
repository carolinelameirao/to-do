import { TarefaCategoria } from '../models/tarefa.categoria.enum'

export class Tarefa {
    id!: string;
    tarefa!: string;
    categoria!: TarefaCategoria;
}