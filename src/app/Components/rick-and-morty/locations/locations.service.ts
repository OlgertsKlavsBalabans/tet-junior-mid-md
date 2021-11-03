import { Injectable } from '@angular/core';
import { IFilterOptions } from '../shared/filter/filter';
import { IListOptions } from '../shared/list/list';

@Injectable({
  providedIn: 'root'
})
export class LocationsService {

  constructor() { }
  fillFilterOptions(filterOptions: IFilterOptions[]): IFilterOptions[] {
    filterOptions.push(
      {
        html_tag: "input",
        type: "text",
        id: "locationName",
        query_name: "name",
        display_name: "Location name"
      },
      {
        html_tag: "input",
        type: "text",
        id: "locationDimension",
        query_name: "dimension",
        display_name: "Dimension"
      },
    );
    return filterOptions;
  }

  fillListOptions(listOptions: IListOptions[]): IListOptions[] {
      listOptions.push({
        objectPropertyName: "name",
        name: "Name",
      },
      {
        objectPropertyName: "dimension",
        name: "Dimension",
      },
      {
        objectPropertyName: "residents",
        name: "Residents",
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
