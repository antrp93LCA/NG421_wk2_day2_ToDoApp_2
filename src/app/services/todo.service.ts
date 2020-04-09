import { Injectable } from '@angular/core';
import { ITodo } from '../interfaces/itodo';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  todoList: ITodo[] = [];
  
  
  constructor() { }

  serviceAddTodo(todo: ITodo) {
    this.todoList.push(todo);
  }

  serviceDeleteTodo(todo: ITodo) {
    const index = this.todoList.findIndex(todoItem => todoItem === todo);
    this.todoList.splice(index, 1);
  }

  serviceGetTodos(){
    return this.todoList;
  }


}
