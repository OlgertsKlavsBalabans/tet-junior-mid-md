import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CharactersComponent } from './Components/rick-and-morty/characters/characters.component';
import { EpisodesComponent } from './Components/rick-and-morty/episodes/episodes.component';
import { LocationsComponent } from './Components/rick-and-morty/locations/locations.component';

const routes: Routes = [
  { path: 'character', component:CharactersComponent},
  { path: 'character/:id', component:CharactersComponent},
  { path: 'location', component:LocationsComponent},
  { path: 'location/:id', component:LocationsComponent},
  { path: 'episode', component:EpisodesComponent},
  { path: 'episode/:id', component:EpisodesComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
