import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilterComponent } from './components/filter/filter.component';
import { ListComponent } from './components/filter/list/list.component';
import { TaskComponent } from './components/filter/list/task/task.component';
import {HttpClient, HttpClientModule} from '@angular/common/http';



@NgModule({
  declarations: [
    FilterComponent,
    ListComponent,
    TaskComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
  ]
})
export class HomeModule { }
