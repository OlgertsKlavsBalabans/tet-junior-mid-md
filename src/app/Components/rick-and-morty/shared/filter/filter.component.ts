import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IFilter } from '../rest-object-service/rest-objects';
import { IFilterOptions } from './filter';

@Component({
  selector: 'ram-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {

  @Input() filterOptions!: IFilterOptions[];

  @Output() $emitFilters = new EventEmitter<IFilter[]>();

  filters: IFilter[] = [];
  constructor() { }

  ngOnInit(): void {

  }

  outputFilter(): void {
    this.$emitFilters.emit(this.filters);
  }

  addToFilter(event: any): void {
    //If filters array already contains the filter change the query else add query
    //If query === "" then delete from filters
    let filter: IFilter;
    if (filter = this.filters.find(filter => {
      return filter.query_name === this.filterOptions.find(filterOption => {
        return filterOption.id === event.target.id
      })?.query_name
    })!) {
      if (event.target.value === "") {
        this.filters.splice(this.filters.indexOf(filter),1);
      } else {
        this.filters[this.filters.indexOf(filter)].query = event.target.value;
      }
    }
    else {
      if (event.target.value === "") {

      } else {
        this.filters.push({
          query: event.target.value,
          query_name: this.filterOptions.find(filterOption => {
            return filterOption.id === event.target.id
          })?.query_name!,
        });
      }

    }
  }

}
