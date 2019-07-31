import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders
} from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { ErrorObservable } from 'rxjs/observable/ErrorObservable';
import { of } from 'rxjs/observable/of';

import { catchError, tap } from 'rxjs/operators';

import { Subject } from 'rxjs/Subject';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class WebService {
  constructor(private http: HttpClient) {}

  get(url): Observable<any> {
    return this.http.get(url);
  }

  post(url: string, data: any): Observable<any> {
    return this.http.post(url, data);
  }

  put(url: string, data: any): Observable<any> {
    return this.http.put(url, data);
  }

  delete(url: string): Observable<any> {
    return this.http.delete(url);
  }

  upload(url: string, data: any, config: any): Observable<any> {
    var self = this;
    return this.http.post(url, data, config);
  }

  upload2(url: string, data: any): Observable<any> {
    var self = this;
    return this.http.post(url, data);
  }

  private handleError(err: HttpErrorResponse): ErrorObservable<string> {
    let errorMessage: string;
    if (err.error instanceof Error) {
      errorMessage = `An error occurred: ${err.error.message}`;
    }
    return ErrorObservable.create(errorMessage);
  }
}
