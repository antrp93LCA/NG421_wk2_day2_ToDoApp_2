import { Injectable } from "@angular/core";
import { ITodo } from "../interfaces/itodo";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { ConfirmationModalComponent } from "../confirmation-modal/confirmation-modal.component";

@Injectable({
  providedIn: "root",
})
export class TodoService {
  todoList: ITodo[] = [];
  todoId: number;
  todoTitle: string;
  description: string;

  constructor(private modalService: NgbModal) {}

  serviceAddTodo(todoTitle: string) {
    this.todoList.push({
      id: this.todoId,
      title: todoTitle,
      description: "",
    });
    this.todoId++;
  }

  async serviceDeleteTodo(todo: ITodo) {
    //show
    const modal = this.modalService.open(ConfirmationModalComponent);
    const component: ConfirmationModalComponent = modal.componentInstance;
    component.modalInstance = modal;

    const result = await modal.result;

    //if the result is yes
    if (result === "yes") {
      const index = this.todoList.findIndex((todoItem) => todoItem === todo);
      this.todoList.splice(index, 1);
    }
  }

  serviceGetTodos() {
    return this.todoList;
  }
}
