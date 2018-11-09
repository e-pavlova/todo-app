import {Component, OnInit} from '@angular/core';
import {ItemService} from './core/services/item.service';
import {Item} from './item.interface';
import {NotifyService} from './core/services/notify.service';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'todo';

  public tasks: Item[];

  constructor(private itemService: ItemService,
              private notifyService: NotifyService,
              private route: ActivatedRoute) {

    notifyService.taskChanged$.subscribe(() => this.tasks = this.itemService.getAllTasks());

    route.queryParams.subscribe((param) => {
        switch (param.key) {
          case '':
            this.showAll();
          case 'active':
            this.showActive();
          case 'completed':
            this.showCompleted();
        }
      }
    );
  }

  ngOnInit() {
    this.tasks = this.itemService.getAllTasks();
  }

  public showAll(): void {
    this.tasks = this.itemService.getAllTasks();
  }

  public showActive(): void {
    this.tasks = this.itemService.getAllTasks().filter((array) => {
      return array.isActive === true;
    })
  }

  public showCompleted(): void {
    this.tasks = this.itemService.getAllTasks().filter((array) => {
      return array.isActive === false;
    })
  }

}
