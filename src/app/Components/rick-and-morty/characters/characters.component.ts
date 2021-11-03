import { Component, OnInit } from '@angular/core';
import { charactersURL } from 'src/app/core/http/endpoints';
import { IFilterOptions } from '../shared/filter/filter';
import { IListOptions } from '../shared/list/list';
import { CharactersService } from './characters.service';

@Component({
  selector: 'app-characters',
  template: '<ram-section [filterOptions]="this.filterOptions" [listOptions]="this.listOptions" [baseUrl]="this.baseUrl"> </ram-section>',
})
export class CharactersComponent implements OnInit {

  baseUrl: string = charactersURL;
  filterOptions: IFilterOptions[] = <IFilterOptions[]>[];
  listOptions:IListOptions[] = <IListOptions[]>[];
  constructor(private charactersService: CharactersService ) { }

  ngOnInit(): void {
    this.filterOptions = this.charactersService.fillFilterOptions(this.filterOptions);
    this.listOptions = this.charactersService.fillListOptions(this.listOptions);
  }

}
