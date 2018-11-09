import { Component, Input, OnInit } from '@angular/core';
import { ItemService } from '../core/services/item.service';
import { Item } from '../item.interface';
import {NotifyService} from "../core/services/notify.service";

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {
  @Input() task: Item;

  public isEdit: boolean = false;

  constructor(private itemService: ItemService, private notifyService: NotifyService) {
  }

  public editTask(): void {
    this.isEdit = true;
  }

  public saveTask(id: number, description: string): void {
    this.isEdit = false;
    this.itemService.updateDescription(id, description);
  }

  public completeTask(id: number): void {
    this.itemService.markAsCompleted(id);
    this.task.isActive = !this.task.isActive;
  }

  public removeTask(id: number): void {
    this.itemService.deleteTask(id);
    this.notifyService.notifyChanges();
  }

  ngOnInit() {
  }

}
