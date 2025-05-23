import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser'; 
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule, FormsModule, BrowserModule,],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ToDoList';
  tarefa = '';

  public items = ['Item 1', 'Item 2', 'Item 3'];

  addTarefa() {
    if (this.tarefa.trim() !== '') {
      this.items.push(this.tarefa);
      this.tarefa = '';
    }
  }

  removeTarefa(index: number) {
    this.items.splice(index, 1);
  }
}
