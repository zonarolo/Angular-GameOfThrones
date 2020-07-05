import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { CharactersComponent } from './pages/characters/pages/characters/characters.component';
import { CharactersDetailsComponent } from './pages/characters/pages/characters-details/characters-details.component';
import { HousesComponent } from './pages/houses/pages/houses/houses/houses.component';
import { HousesDetailsComponent } from './pages/houses/pages/houses-details/houses-details/houses-details.component';
import { TimelineComponent } from './pages/characters/components/timeline/timeline.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'characters',
    component: CharactersComponent,
  },
  {
    path: 'characters/:name',
    component: CharactersDetailsComponent,
  },
  {
    path: 'houses',
    component: HousesComponent,
  },
  {
    path: 'houses/:name',
    component: HousesDetailsComponent,
  },
  {
    path: 'timeline',
    component: TimelineComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
