import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AddItemComponent } from './add-item/add-item.component';
import { TodoItemComponent } from './todo-item/todo-item.component';
import { TodoViewComponent } from './todo-view/todo-view.component';
import { CoreModule } from "./core/core.module";

@NgModule({
  declarations: [
    AppComponent,
    AddItemComponent,
    TodoItemComponent,
    TodoViewComponent
  ],
  imports: [
    BrowserModule,
    CoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
