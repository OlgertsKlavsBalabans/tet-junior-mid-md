import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IFilter } from '../rest-object-service/rest-objects';
import { IFilterOptions } from '../filter/filter';
import { IListOptions } from '../list/list';
import { IDataREST } from './section';
import { RestObjectsService } from '../rest-object-service/rest-objects.service';

@Component({
  selector: 'ram-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.scss']
})
export class SectionComponent implements OnInit {
  data!: IDataREST;

  @Input() filterOptions!: IFilterOptions[];
  @Input() listOptions!: IListOptions[];
  @Input() baseUrl!: string;

  specificSearch: boolean = false;
  constructor(private restObjectsService: RestObjectsService,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    if (this.activatedRoute.snapshot.paramMap.get("id")) {
      this.specificSearch = true;
      let params = "[" + this.activatedRoute.snapshot.paramMap.get("id") + "]";
      this.baseUrl = this.baseUrl + params;
      this.restObjectsService.getObject<any[]>(this.baseUrl).subscribe(data => {
        this.data = {
          results: data,
        }
      });
    } else {
      this.restObjectsService.getObject<IDataREST>(this.baseUrl).subscribe(data => {
        this.data = data;
      });
    }
  }

  filterList(filter: IFilter[]): void {
    this.restObjectsService.getFilteredObject<IDataREST>(filter, this.baseUrl).subscribe(data => {
      this.data = data;
    });
  }

  getPage(url: string): void {
    this.restObjectsService.getObject<IDataREST>(url).subscribe(data => {
      this.data = data;
    });
  }

}
