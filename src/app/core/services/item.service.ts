import { Injectable } from '@angular/core';
import { Item } from '../../item.interface';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  constructor() {
  }

  public createTask(item: string): number {

    let itemObj: Item = {
      id: Date.now(),
      description: item,
      isActive: true
    };


    const arrayOfTasks = this.getAllTasks() || [];

    arrayOfTasks.push(itemObj);

    localStorage.setItem('array', JSON.stringify(arrayOfTasks));

    return itemObj.id;
  }

  public getAllTasks(): Item[] {
    return JSON.parse(localStorage.getItem('array'));
  }

  public getTaskById(id: number): Item {
    return this.getAllTasks().find((array) => {
      return array.id === id;
    });
  }

  public markAsCompleted(id: number): void {
    let allTasks = this.getAllTasks();
    let item = allTasks.find((array) => {
      return array.id === id;
    });

    item.isActive = !(item.isActive);

    localStorage.setItem('array', JSON.stringify(allTasks));
  }


  public updateDescription(id: number, description: string): void {
    let allTasks = this.getAllTasks();
    let item = allTasks.find((array) => {
      return array.id === id;
    });

    item.description = description;

    localStorage.setItem('array', JSON.stringify(allTasks));
  }

  public deleteTask(id: number): void {
    let allTasks = this.getAllTasks().filter((array) => {
      return array.id !== id;
    });

    localStorage.setItem('array', JSON.stringify(allTasks));
  }

}
