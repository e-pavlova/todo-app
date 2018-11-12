import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Item } from '../../item.interface';

@Injectable({
  providedIn: 'root'
})
export class NotifyService {

  constructor() {
  }

  private notifyAboutTasksChanges = new Subject();

  taskChanged$ = this.notifyAboutTasksChanges.asObservable();

  public notifyChanges() {
    this.notifyAboutTasksChanges.next();
  }

}
