import { Component, OnInit } from '@angular/core';
import { NotifyService } from '../core/services/notify.service';
import { ItemService } from '../core/services/item.service';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.css']
})
export class AddItemComponent implements OnInit {

  constructor(private itemService: ItemService, private notifyService: NotifyService) {
  }

  public createItem(description: string) {
    this.itemService.createTask(description);
    this.notifyService.notifyChanges();
  }
  ngOnInit() {
  }

}
