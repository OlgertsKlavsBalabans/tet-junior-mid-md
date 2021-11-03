import { Component, OnInit } from '@angular/core';
import { episodesURL } from 'src/app/core/http/endpoints';
import { IFilterOptions } from '../shared/filter/filter';
import { IListOptions } from '../shared/list/list';
import { EpisodesService } from './episodes.service';

@Component({
  selector: 'app-episodes',
  template: '<ram-section [filterOptions]="this.filterOptions" [listOptions]="this.listOptions" [baseUrl]="this.baseUrl"> </ram-section>',
})
export class EpisodesComponent implements OnInit {

  baseUrl: string = episodesURL;
  filterOptions: IFilterOptions[] = <IFilterOptions[]>[];
  listOptions:IListOptions[] = <IListOptions[]>[];
  constructor( private episodesService: EpisodesService ) { }

  ngOnInit(): void {
    this.filterOptions = this.episodesService.fillFilterOptions(this.filterOptions);
    this.listOptions = this.episodesService.fillListOptions(this.listOptions);
  }
}
