import { Injectable } from '@angular/core';
import { IFilterOptions } from '../shared/filter/filter';
import { IListOptions } from '../shared/list/list';

@Injectable({
  providedIn: 'root'
})
export class EpisodesService {

  constructor() { }
  fillFilterOptions(filterOptions: IFilterOptions[]): IFilterOptions[] {
    filterOptions.push(
      {
        html_tag: "input",
        type: "text",
        id: "episodeTitle",
        query_name: "name",
        display_name: "Episode title"
      },
    );
    return filterOptions;
  }

  fillListOptions(listOptions: IListOptions[]): IListOptions[] {
    listOptions.push({
        objectPropertyName: "name",
        name: "Title",
      },
      {
        objectPropertyName: "air_date",
        name: "Air date",
      },
      {
        objectPropertyName: "episode",
        name: "Episode",
      },
      {
        objectPropertyName: "characters",
        name: "Characters",
        nestedOptions: [
          {
            objectPropertyName: "name",
            name: "Name",
            link: "url",
          }
        ]
      },
      
      );
    return listOptions;
  }
}
