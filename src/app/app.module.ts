import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { CharactersComponent } from './Components/rick-and-morty/characters/characters.component';
import { RickAndMortyComponent } from './Components/rick-and-morty/rick-and-morty.component';
import { LocationsComponent } from './Components/rick-and-morty/locations/locations.component';
import { EpisodesComponent } from './Components/rick-and-morty/episodes/episodes.component';
import { FormsModule } from '@angular/forms';
import { PaginatorComponent } from './Components/rick-and-morty/shared/paginator/paginator.component';
import { ListComponent } from './Components/rick-and-morty/shared/list/list.component';
import { FilterComponent } from './Components/rick-and-morty/shared/filter/filter.component';
import { SectionComponent } from './Components/rick-and-morty/shared/section/section.component';
import { CardComponent } from './Components/rick-and-morty/shared/list/card/card.component';
@NgModule({
  declarations: [
    AppComponent,
    CharactersComponent,
    RickAndMortyComponent,
    LocationsComponent,
    EpisodesComponent,
    PaginatorComponent,
    ListComponent,
    FilterComponent,
    SectionComponent,
    CardComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
