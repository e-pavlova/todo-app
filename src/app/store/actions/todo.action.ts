import {Action} from "@ngrx/store";

export const GET_ALL = '[Item] GET_ALL';
export const GET_TODO = '[Item] GET_TODO';
export const CREATE_TODO = '[Item] CREATE_TODO';
export const UPDATE_TODO = '[Item] GET_TODO';
export const DELETE_TODO = '[Item] DELETE_TODO';
export const MARK_TODO = '[Item] MARK_TODO';

export class GetAllItems implements Action {
  readonly type = GET_ALL;

  constructor() {}
}

export class GetItem implements Action {
  readonly type = GET_TODO;

  constructor(public id: number) {}
}

export class CreateItem implements Action {
  readonly type = CREATE_TODO;

  constructor(public description: string) {}
}

export class UpdateItem implements Action {
  readonly type = UPDATE_TODO;

  constructor(public payload: {id: number, description: string}) {}
}

export class MarkItem implements Action {
  readonly type = MARK_TODO;

  constructor(public id: number, public isActive: boolean) {}
}

export class DeleteItem implements Action {
  readonly type = DELETE_TODO;

  constructor(public id: number) {}
}

// Export all actions

export type TodoActionTypes = GetAllItems
  | GetItem
  | CreateItem
  | UpdateItem
  | MarkItem
  | DeleteItem;

