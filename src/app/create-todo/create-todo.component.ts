import { Component, OnInit } from '@angular/core';
import { ITodo } from '../interfaces/itodo';
import { TodoService } from '../services/todo.service';

@Component({
  selector: 'app-create-todo',
  templateUrl: './create-todo.component.html',
  styleUrls: ['./create-todo.component.css']
})
export class CreateTodoComponent implements OnInit {

  todoList: ITodo[]
  todoTitle: string;
  todoId: number = 0;

  constructor(private todoService: TodoService) { }

  ngOnInit() {
    this.todoTitle = '';
    this.todoList = [
      // example of how to make an item in todo list
      { id: 1, title: 'Install Angular CLI', description: 'description' },

    ];
  }
  
  addTodo(todo: ITodo) {
    this.todoService.serviceAddTodo(todo);
    // resets our todoTitle variable to an empty string
    this.todoTitle = '';
    this.todoId++;
  }


}
