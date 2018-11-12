import { Component, OnInit, OnDestroy } from '@angular/core';
import { ItemService } from './core/services/item.service';
import { Item } from './item.interface';
import { NotifyService } from './core/services/notify.service';
import { ActivatedRoute } from '@angular/router';
import {Subject} from "rxjs";
import {takeUntil} from "rxjs/operators";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'todo';

  public tasks: Item[];
  public filter: string;
  private componentDestroyed: Subject<void> = new Subject();

  constructor(private itemService: ItemService,
              private notifyService: NotifyService,
              private route: ActivatedRoute) {

    notifyService.taskChanged$.pipe(takeUntil(this.componentDestroyed)).subscribe(() => this.fillItems(this.filter));

    route.queryParams.pipe(takeUntil(this.componentDestroyed)).subscribe((param) => {
        this.filter = param.filter;
        this.fillItems(this.filter);
      }
    );
  }

  ngOnInit() {
  }

  public fillItems(filter: string): void {
    switch (filter) {
      case undefined:
        this.showAll();
        break;
      case 'active':
        this.showActive();
        break;
      case 'completed':
        this.showCompleted();
        break;
    }
  }

  public showAll(): void {
    this.tasks = this.itemService.getAllTasks();
  }

  public showActive(): void {
    this.tasks = this.itemService.getAllTasks().filter((array) => {
      return array.isActive === true;
    });
  }

  public showCompleted(): void {
    this.tasks = this.itemService.getAllTasks().filter((array) => {
      return array.isActive === false;
    });
  }

  ngOnDestroy() {
    this.componentDestroyed.next();
    this.componentDestroyed.unsubscribe();
  }

}
