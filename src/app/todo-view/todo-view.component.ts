import {Component, EventEmitter, OnInit} from '@angular/core';
import { Output } from "@angular/core";

@Component({
  selector: 'app-todo-view',
  templateUrl: './todo-view.component.html',
  styleUrls: ['./todo-view.component.css']
})
export class TodoViewComponent implements OnInit {

  @Output() onViewAll = new EventEmitter();
  @Output() onActive = new EventEmitter();
  @Output() onCompleted = new EventEmitter();

  constructor() {
  }

  showAllTasks(event) {
    this.onViewAll.emit(event);
  }

  showActiveTasks(event) {
    this.onActive.emit(event);
  }

  showCompletedTasks(event) {
    this.onCompleted.emit(event);
  }

  ngOnInit() {
  }

}
