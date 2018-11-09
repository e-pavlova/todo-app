import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {AddItemComponent} from './add-item/add-item.component';
import {TodoItemComponent} from './todo-item/todo-item.component';
import {TodoViewComponent} from './todo-view/todo-view.component';
import {CoreModule} from './core/core.module';
import {FormsModule} from '@angular/forms';

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
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
