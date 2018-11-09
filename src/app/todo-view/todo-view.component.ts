import {Component, EventEmitter, OnInit} from '@angular/core';
import {Output} from "@angular/core";
import {Router} from "@angular/router";

@Component({
  selector: 'app-todo-view',
  templateUrl: './todo-view.component.html',
  styleUrls: ['./todo-view.component.css']
})
export class TodoViewComponent implements OnInit {

  @Output() onViewAll = new EventEmitter();
  @Output() onActive = new EventEmitter();
  @Output() onCompleted = new EventEmitter();

  constructor(private router: Router) {
  }

  public showAllTasks(event) {
    this.onViewAll.emit(event);
    this.router.navigate(['']);
  }

  public showActiveTasks(event) {
    this.onActive.emit(event);
    this.router.navigate([''], {queryParams: {filter: 'active'}});
  }

  public showCompletedTasks(event) {
    this.onCompleted.emit(event);
    this.router.navigate([''], {queryParams: {filter: 'completed'}});
  }

  ngOnInit() {
  }

}
