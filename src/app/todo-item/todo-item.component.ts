import { Component, Input, OnInit } from '@angular/core';
import { ItemService } from '../core/services/item.service';
import { Item } from '../item.interface';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {
  @Input() task: Item;

  public isEdit: boolean = false;
  public isCompleted: boolean = true;

  constructor(private itemService: ItemService) {
  }

  public editTask(): void {
    this.isEdit = true;
  }

  public saveTask(): void {
    this.isEdit = false;
    // this.itemService.updateDescription();
  }

  public completeTask(id: number): void {
    this.itemService.markAsCompleted(id);
    this.isCompleted = this.itemService.getTaskById(id).isActive;
  }

  ngOnInit() {
  }

}
