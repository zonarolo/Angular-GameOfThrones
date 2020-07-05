import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { CharactersListComponent } from './pages/characters/components/characters-list/characters-list.component';
import { CharactersComponent } from './pages/characters/pages/characters/characters.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { OrderListModule } from 'primeng/orderlist';
import { CharactersDetailsComponent } from './pages/characters/pages/characters-details/characters-details.component';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HousesListComponent } from './pages/houses/components/houses-list/houses-list.component';
import { HousesComponent } from './pages/houses/pages/houses/houses/houses.component';
import { HousesDetailsComponent } from './pages/houses/pages/houses-details/houses-details/houses-details.component';
import { SimplebarAngularModule } from 'simplebar-angular';
import { TimelineComponent } from './pages/characters/components/timeline/timeline.component';

export function HttpLoaderFactory(httpClient: HttpClient) {
  return new TranslateHttpLoader(httpClient);
}

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CharactersListComponent,
    CharactersComponent,
    CharactersDetailsComponent,
    HousesListComponent,
    HousesComponent,
    HousesDetailsComponent,
    TimelineComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    OrderListModule,
    SimplebarAngularModule,
    TranslateModule.forRoot({
      defaultLanguage: 'es',
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient],
      },
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
