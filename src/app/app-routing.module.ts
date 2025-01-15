import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {FilterComponent} from './home/components/filter/filter.component';
import {HomeComponent} from './home/components/home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
