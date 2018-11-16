import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {AddItemComponent} from './add-item/add-item.component';
import {TodoItemComponent} from './todo-item/todo-item.component';
import {TodoViewComponent} from './todo-view/todo-view.component';
import {CoreModule} from './core/core.module';
import {FormsModule} from '@angular/forms';
import {AppRoutingModule} from "./app-routing.module";
import {RouterModule} from "@angular/router";
import {StoreModule} from '@ngrx/store';
import {todoReducer} from './store/reducers/todo.reducer'
import {EffectsModule} from "@ngrx/effects";
import {TodoEffects} from "./store/effects/todo.effect";

@NgModule({
  declarations: [
    AppComponent,
    AddItemComponent,
    TodoItemComponent,
    TodoViewComponent
  ],
  imports: [
    BrowserModule,
    CoreModule,
    FormsModule,
    AppRoutingModule,
    RouterModule,
    StoreModule.forRoot({
      todos: todoReducer
    }),
    EffectsModule.forRoot([TodoEffects]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
