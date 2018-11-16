import {Component, OnInit, OnDestroy} from '@angular/core';
import {Item} from './item.interface';
import {ActivatedRoute} from '@angular/router';
import {Subject} from "rxjs";
import {takeUntil} from "rxjs/operators";
import {Store} from "@ngrx/store";
import {GlobalState} from "./store/item-state.interface";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'todo';

  public tasks: Item[];
  public allTasks: Item[];
  public filter: string;
  private componentDestroyed: Subject<void> = new Subject();

  constructor(private route: ActivatedRoute,
              private store: Store<any>) {
  }

  ngOnInit() {
    this.store.select('todos').pipe(takeUntil(this.componentDestroyed)).subscribe((todos: GlobalState) => {
      this.allTasks = todos.todos;
      this.fillItems(this.filter)
    });

    this.route.queryParams.pipe(takeUntil(this.componentDestroyed)).subscribe((param) => {
        this.filter = param.filter;
        this.fillItems(this.filter);
      }
    );
  }

  public fillItems(filter: string): void {
    switch (filter) {
      case undefined:
        this.tasks = [...this.allTasks];
        break;
      case 'active':
        this.tasks = this.allTasks.filter((x: Item) => x.isActive);
        break;
      case 'completed':
        this.tasks = this.allTasks.filter((x: Item) => !x.isActive)
        break;
    }
  }

  public showAll(): void {
    this.filter = undefined;
    this.fillItems(this.filter);
  }

  public showActive(): void {
    this.filter = 'active';
    this.fillItems(this.filter);
  }

  public showCompleted(): void {
    this.filter = 'completed';
    this.fillItems(this.filter);
  }

  ngOnDestroy() {
    this.componentDestroyed.next();
    this.componentDestroyed.unsubscribe();
  }

}
