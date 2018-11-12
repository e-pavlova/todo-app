import {Component, EventEmitter, OnInit, OnDestroy} from '@angular/core';
import {Output} from "@angular/core";
import {ActivatedRoute, Router} from '@angular/router';
import {Params} from '@angular/router/src/shared';
import {Subject} from "rxjs";
import {takeUntil} from "rxjs/operators";

@Component({
  selector: 'app-todo-view',
  templateUrl: './todo-view.component.html',
  styleUrls: ['./todo-view.component.css']
})
export class TodoViewComponent implements OnInit, OnDestroy {

  @Output() onViewAll = new EventEmitter();
  @Output() onActive = new EventEmitter();
  @Output() onCompleted = new EventEmitter();

  public selectedFilter: string;
  private componentDestroyed: Subject<void> = new Subject();

  constructor(private router: Router, private route: ActivatedRoute) {
    this.route.queryParams.pipe(takeUntil(this.componentDestroyed)).subscribe((params: Params) => {
      switch (params.filter) {
        case undefined:
          this.selectedFilter = undefined;
          break;
        case 'active':
          this.selectedFilter = 'active';
          break;
        case 'completed':
          this.selectedFilter = 'completed';
          break;
      }
    });
  }

  public showAllTasks(event): void {
    this.onViewAll.emit(event);
    this.router.navigate(['']);
  }

  public showActiveTasks(event): void {
    this.onActive.emit(event);
    this.router.navigate([''], {queryParams: {filter: 'active'}});
  }

  public showCompletedTasks(event): void {
    this.onCompleted.emit(event);
    this.router.navigate([''], {queryParams: {filter: 'completed'}});
  }

  ngOnInit() {
  }

  ngOnDestroy() {
    this.componentDestroyed.next();
    this.componentDestroyed.unsubscribe();
  }
}
