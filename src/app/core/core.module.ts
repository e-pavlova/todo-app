import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemService } from './services/item.service';
import { NotifyService } from './services/notify.service';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    ItemService,
    NotifyService
  ]
})
export class CoreModule {
}
