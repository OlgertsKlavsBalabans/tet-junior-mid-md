import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { IListOptions } from '../list';
import { ListService } from '../list.service';

@Component({
  selector: 'ram-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() listOptions!: IListOptions[];
  @Input() listObject!: any;
  observable!: Observable<any[]>;
  nestedObjectOpen: boolean = false;
  constructor(private listService: ListService) { }

  ngOnInit(): void {
    this.listOptions.forEach(listOption => {
      if (listOption.nestedOptions) {
        if (this.listService.fetchFromObject(this.listObject, listOption.objectPropertyName).length > 0) {
          this.observable = this.listService.getObjectFromStringArray(
            this.listService.fetchFromObject(this.listObject, listOption.objectPropertyName)
          );
        }
      }
    })
  }

  getProperty(propertyName: string): any {
    return this.listService.fetchFromObject(this.listObject, propertyName);
  }

  getArrayLink(propertyName: string): string {
    return this.listService.getRouterLinkFromAPIUrl(
      this.listService.getCombinedUrlFromArray(
        this.listService.fetchFromObject(this.listObject, propertyName)
      )
    )
  }

  getLink(propertyName: string): string {
    return this.listService.getRouterLinkFromAPIUrl(
      this.listService.fetchFromObject(this.listObject, propertyName)
    );
  }

}
