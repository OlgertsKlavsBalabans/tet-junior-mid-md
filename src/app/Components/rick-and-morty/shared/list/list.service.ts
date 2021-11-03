import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { baseDomain, entrypointUrl } from 'src/app/core/http/endpoints';
import { RestObjectsService } from '../rest-object-service/rest-objects.service';

@Injectable({
  providedIn: 'root'
})
export class ListService {

  constructor(private restObjectsService: RestObjectsService) { }

  fetchFromObject(obj: any, prop: string): any {
    if (typeof obj === 'undefined') {
      return false;
    }
    var _index = prop.indexOf('.')
    if (_index > -1) {
      return this.fetchFromObject(obj[prop.substring(0, _index)], prop.substr(_index + 1));
    }
    return obj[prop];
  }

  getRouterLinkFromAPIUrl(url: string): string {
    url = url.split(entrypointUrl).join("");
    url = baseDomain + url;
    return url;
  }

  getCombinedUrlFromArray(urlArray: string[], arrayRequest?: boolean): string {

    let baseUrl = urlArray[0];
    let baseUrlSplit = baseUrl.split("/");
    baseUrlSplit.pop();
    baseUrl = baseUrlSplit.join("/") + "/";
    let sendingUrl = "";
    urlArray.forEach(url => {
      if (sendingUrl === "") {
        if (arrayRequest) {
          sendingUrl = "[" + url.split(baseUrl).join("");
        } else {
          sendingUrl = url.split(baseUrl).join("");
        }
      }
      else {
        sendingUrl = sendingUrl + "," + url.split(baseUrl).join("");
      }
    })
    sendingUrl = baseUrl + sendingUrl;
    if (arrayRequest) {
      sendingUrl = sendingUrl + "]";
    }
    return sendingUrl;
  }

  getObjectFromStringArray(urlArray: string[]): Observable<any[]> {
    let sendingUrl = this.getCombinedUrlFromArray(urlArray, true);
    return this.restObjectsService.getObject<any[]>(sendingUrl);

  }
}
