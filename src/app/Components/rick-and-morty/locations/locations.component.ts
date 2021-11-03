import { Component, OnInit } from '@angular/core';
import { locationsURL } from 'src/app/core/http/endpoints';
import { IFilterOptions } from '../shared/filter/filter';
import { IListOptions } from '../shared/list/list';
import { LocationsService } from './locations.service';

@Component({
  selector: 'app-locations',
  template: '<ram-section [filterOptions]="this.filterOptions" [listOptions]="this.listOptions" [baseUrl]="this.baseUrl"> </ram-section>',
})
export class LocationsComponent implements OnInit {
  baseUrl: string = locationsURL;
  filterOptions: IFilterOptions[] = <IFilterOptions[]>[];
  listOptions: IListOptions[] = <IListOptions[]>[];
  constructor(private locationsService: LocationsService) { }

  ngOnInit(): void {
    this.filterOptions = this.locationsService.fillFilterOptions(this.filterOptions);
    this.listOptions = this.locationsService.fillListOptions(this.listOptions);
  }
}
