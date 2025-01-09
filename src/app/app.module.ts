import {NgModule, provideExperimentalZonelessChangeDetection} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import {FilterComponent} from './home/components/filter/filter.component';
import {HomeModule} from './home/home.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomeModule,
  ],
  providers: [
    provideExperimentalZonelessChangeDetection(),
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
