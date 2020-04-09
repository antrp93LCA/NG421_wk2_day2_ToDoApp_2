import { Injectable } from '@angular/core';
import { ITodo } from '../interfaces/itodo';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  todoList: ITodo[] = [];
  todoId: number;
  todoTitle: string;
  description: string;
  
  
  constructor() { }

  serviceAddTodo(todoTitle: string) {
    this.todoList.push({
      id: this.todoId,
      title: todoTitle,
      description: ''
    });
    this.todoId++
  }

  serviceDeleteTodo(todo: ITodo) {
    const index = this.todoList.findIndex(todoItem => todoItem === todo);
    this.todoList.splice(index, 1);
  }

  serviceGetTodos(){
    return this.todoList;
  }


}
