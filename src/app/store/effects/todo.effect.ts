import {Actions, Effect, ofType} from '@ngrx/effects';
import {ItemService} from "../../core/services/item.service";
import {Injectable} from "@angular/core";
import {EMPTY, Observable} from "rxjs";
import {switchMap, withLatestFrom} from "rxjs/operators";
import {Action, Store} from "@ngrx/store";
import * as todo_action from "../actions/todo.action";
import {GlobalState} from "../item-state.interface";

@Injectable()
export class TodoEffects {
  constructor(private itemService: ItemService,
              private action$: Actions,
              private store$: Store<GlobalState>) {
  }

  @Effect()
  createTask$: Observable<Action> = this.action$.pipe(
    ofType(todo_action.CREATE_TODO, todo_action.DELETE_TODO, todo_action.MARK_TODO, todo_action.UPDATE_TODO),
    withLatestFrom(this.store$.select('todos')),
    switchMap((arr: [todo_action.CreateItem, any], index: number) => {
      const [action, store] = arr;

      if (store.todos && store.todos.length > 0) {
        localStorage.setItem('array', JSON.stringify(store.todos));
      } else {
        localStorage.removeItem('array');
      }

      return EMPTY;
    }));

}
