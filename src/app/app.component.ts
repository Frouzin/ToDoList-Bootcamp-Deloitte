import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface Tarefa {
  descricao: string;
  completed: boolean;
}

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule, FormsModule,],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  title = 'ToDoList';
  tarefa: string = '';
  tarefas: Tarefa[] = [
    { descricao: 'Estudar Angular', completed: false },
    { descricao: 'Fazer compras', completed: false },
    { descricao: 'Lavar o carro', completed: false }
  ];

  addTarefa() {
    if (this.tarefa.trim() !== '') {
      this.tarefas.push({ descricao: this.tarefa, completed: false });
      this.tarefa = '';
    }
  }

  removeTarefa(index: number) {
    this.tarefas.splice(index, 1);
  }

  toggleTask(index: number): void {
    this.tarefas[index].completed = !this.tarefas[index].completed;
  }
}
