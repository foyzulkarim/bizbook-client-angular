import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';

import { map } from 'rxjs/operators';

import { WebService } from './web.service';

import { Entity, SearchRequest, SearchResponse } from '../model/common';

@Injectable()
export class SearchService {
  constructor(private webService: WebService) {}

  search(request: SearchRequest, url: string): Observable<SearchResponse> {
    return this.webService
      .post(url, request)
      .pipe(map((res) => new SearchResponse(res.data)));
  }

  get(url: string): Observable<any> {
    return this.webService.get(url);
  }

  download(url: string): Observable<any> {
    return this.webService.get(url);
  }
}
