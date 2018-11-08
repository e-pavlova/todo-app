import { Component, OnInit } from '@angular/core';
import { ItemService } from './core/services/item.service';
import { Item } from './item.interface';
import { NotifyService } from './core/services/notify.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'todo';

  public tasks: Item[];

  constructor(private itemService: ItemService, private notifyService: NotifyService) {

    notifyService.taskChanged$.subscribe(() => this.tasks = this.itemService.getAllTasks());
  }

  ngOnInit() {
    this.tasks = this.itemService.getAllTasks();
  }

}
