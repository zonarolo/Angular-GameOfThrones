import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { CharactersListComponent } from './pages/characters/components/characters-list/characters-list.component';
import { CharactersComponent } from './pages/characters/pages/characters/characters.component';
import { HttpClientModule } from "@angular/common/http";
import { OrderListModule } from 'primeng/orderlist';
import { CharactersDetailsComponent } from './pages/characters/pages/characters-details/characters-details.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CharactersListComponent,
    CharactersComponent,
    CharactersDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    OrderListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
