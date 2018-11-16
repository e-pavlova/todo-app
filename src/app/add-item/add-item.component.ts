import {Component, OnInit} from '@angular/core';
import {GlobalState} from "../store/item-state.interface";
import {Store} from "@ngrx/store";
import {CreateItem} from "../store/actions/todo.action";

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.css']
})
export class AddItemComponent implements OnInit {

  constructor(private store: Store<GlobalState>) {
  }

  public createItem(description: string) {
    if (description) {
      this.store.dispatch(new CreateItem(description));
    }
  }

  ngOnInit() {
  }

}
