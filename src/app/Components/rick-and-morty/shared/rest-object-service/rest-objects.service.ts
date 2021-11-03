import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IFilter } from './rest-objects';

@Injectable({
  providedIn: 'root'
})
export class RestObjectsService {

  constructor(private httpClient: HttpClient) { }

  getObject<T>(url:string): Observable<T> {
    return this.httpClient.get<T>(url);
  }

  getFilteredObject<T>(filters:IFilter[],url:string): Observable<T> {
    if (filters.length>0){
      let counter:number = 0;
      filters.forEach(filter => {
        if (counter === 0){
          url = url + "?";
        }else {
          url = url + "&";
        }
        url=url+filter.query_name+"="+filter.query;
        counter++;
      });
    }
    return this.httpClient.get<T>(url);
  }
}
