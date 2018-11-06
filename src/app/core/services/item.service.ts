import { Injectable } from '@angular/core';
import { Item } from "../../item.interface";

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  constructor() {
  }

  public createTask(item: string): void {

    let itemObj: Item = {
      id: Date.now(),
      description: item,
      isActive: true
    };

    localStorage.setItem(itemObj.id.toString(), JSON.stringify(itemObj));
  }

  public getTaskById(id: string): Item {
    return JSON.parse(localStorage.getItem(id));
  }

  public markAsCompleted(id: string): void {
    let item = JSON.parse(localStorage.getItem(id));
    item.isActive = !(item.isActive);
    localStorage.setItem(id, JSON.stringify(item));
  }

  public deleteTask(id: string): void {
    localStorage.removeItem(id);
  }

}
