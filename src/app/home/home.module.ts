import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilterComponent } from './components/filter/filter.component';
import { ListComponent } from './components/filter/list/list.component';
import { TaskComponent } from './components/filter/list/task/task.component';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import { ProgressBarComponent } from './components/filter/list/task/progress-bar/progress-bar.component';
import { ExecutorTimeComponent } from './components/filter/list/task/executor-time/executor-time.component';
import { HomeComponent } from './components/home/home.component';
import { ManagementComponent } from './components/filter/list/task/management/management.component';



@NgModule({
  declarations: [
    FilterComponent,
    ListComponent,
    TaskComponent,
    ProgressBarComponent,
    ExecutorTimeComponent,
    HomeComponent,
    ManagementComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
  ]
})
export class HomeModule { }
