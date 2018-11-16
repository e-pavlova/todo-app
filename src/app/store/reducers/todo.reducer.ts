import * as todo_action from "../actions/todo.action";
import {GlobalState} from '../item-state.interface'
import {Item} from "../../item.interface";

export const initialState: GlobalState = {
  todos: JSON.parse(localStorage.getItem('array')) || []
};

export function todoReducer(state: GlobalState = initialState, action: todo_action.TodoActionTypes): GlobalState {

  switch (action.type) {

    case todo_action.CREATE_TODO: {
      const create = action as todo_action.CreateItem;
      const newTodos = [...state.todos, {
        id: Date.now(),
        description: create.description,
        isActive: true
      }];
      console.log(Object.assign({}, state, {todos: newTodos}));
      return Object.assign({}, state, {todos: newTodos});
    }

    case todo_action.UPDATE_TODO:
      const updateAction = action as todo_action.UpdateItem;
      const newTodos = state.todos.map((x: Item) => {
        if (x.id === updateAction.payload.id) {
          return Object.assign({}, x, {description: updateAction.payload.description});
        } else {
          return x;
        }
      });

      return Object.assign({}, state, {todos: newTodos});

    case todo_action.MARK_TODO: {
      const markTodo = action as todo_action.MarkItem;
      const newTodos = state.todos.map((x: Item) => {
        if (x.id === markTodo.id) {
          return Object.assign({}, x, {isActive: markTodo.isActive} as Item);
        } else {
          return x;
        }
      });

      return Object.assign({}, state, {todos: newTodos});
    }

    case todo_action.DELETE_TODO: {
      const deleteTodo = action as todo_action.DeleteItem;
      const newTodos = state.todos.filter((x: Item) => {
        return x.id !== deleteTodo.id;
      });

      return Object.assign({}, state, {todos: newTodos});
    }
    default:
      return state;
  }
}
