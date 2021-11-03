import { Injectable } from '@angular/core';
import { IFilterOptions } from '../shared/filter/filter';
import { IListOptions } from '../shared/list/list';

@Injectable({
  providedIn: 'root'
})
export class CharactersService {

  constructor() { }

  fillFilterOptions(filterOptions: IFilterOptions[]): IFilterOptions[] {
    filterOptions.push(
      {
        html_tag: "input",
        type: "text",
        id: "characterName",
        query_name: "name",
        display_name: "Character name"
      },
      {
        html_tag: "select",
        id: "characterGender",
        options: [
          {
            value: "",
            display_value: "All",
          },
          {
            value: "female",
            display_value: "Female",
          },
          {
            value: "male",
            display_value: "Male",
          },
          {
            value: "genderless",
            display_value: "Genderless",
          },
          {
            value: "unknown",
            display_value: "Unknown",
          },
        ],
        query_name: "gender",
        display_name: "Gender"
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
        objectPropertyName: "gender",
        name: "Gender",
      },
      {
        objectPropertyName: "episode.length",
        name: "Episodes",
        arrayLink: "episode",
      },
      {
        objectPropertyName: "origin.name",
        name: "Origin",
        link: "origin.url",
      },
      {
        objectPropertyName: "location.name",
        name: "Location",
        link: "location.url",
      });
    return listOptions;
  }
}
