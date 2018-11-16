import {Component, Input, OnInit} from '@angular/core';
import {Item} from '../item.interface';
import {GlobalState} from "../store/item-state.interface";
import {Store} from "@ngrx/store";
import * as todo_action from "../store/actions/todo.action";

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {
  @Input() task: Item;

  public isEdit: boolean = false;

  constructor(private store: Store<GlobalState>) {
  }

  public editTask(): void {
    this.isEdit = true;
  }

  public saveTask(id: number, description: string): void {
    this.isEdit = false;
    this.store.dispatch(new todo_action.UpdateItem({id, description}));
  }

  public completeTask(id: number): void {
    this.store.dispatch(new todo_action.MarkItem(id, !this.task.isActive));
  }

  public removeTask(id: number): void {
    this.store.dispatch(new todo_action.DeleteItem(id));
  }

  ngOnInit() {
  }

}
