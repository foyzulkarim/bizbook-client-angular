import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';

import { map, tap } from 'rxjs/operators';

import { WebService } from './web.service';

import { AuthService } from './auth.service';

import { Entity, BaseResponse } from '../model/common';

@Injectable()
export class SaveService {
  constructor(private webService: WebService, private auth: AuthService) {}

  save(data: Entity, url: string): Observable<any> {
    var self = this;
    data.created = new Date().toDateString();
    data.modified = new Date().toDateString();
    data.createdBy = self.auth.accountInfo.userName;
    data.createdFrom = 'Browser';
    data.modifiedBy = self.auth.accountInfo.userName;
    data.id = '1';
    data.shopId = data.shopId != null ? data.shopId : '1';

    console.log(data);

    return this.webService.post(url, data).pipe(
      map((res) => {
        console.log(res);
        new BaseResponse(true, res, 'Success');
      })
    );
  }

  update(data: Entity, url: string): Observable<BaseResponse> {
    var self = this;
    data.modified = new Date().toDateString();
    data.modifiedBy = self.auth.accountInfo.userName;
    data.shopId = data.shopId != null ? data.shopId : '1';
    return self.webService
      .put(url, data)
      .pipe(map((res) => new BaseResponse(true, res, 'Success')));
  }

  updateMultiple(data: Entity[], url: string): Observable<BaseResponse> {
    var self = this;
    for (let i = 0; i < data.length; i++) {
      data[i].modified = new Date().toDateString();
      data[i].modifiedBy = self.auth.accountInfo.userName;
      data[i].shopId = data[i].shopId != null ? data[i].shopId : '1';
    }

    return this.webService
      .put(url, data)
      .pipe(map((res) => new BaseResponse(true, res, 'Success')));
  }

  delete(id: string, url: string): Observable<BaseResponse> {
    var self = this;

    return self.webService
      .delete(url + '?id=' + id)
      .pipe(map((res) => new BaseResponse(true, res, 'Success')));
  }

  upload(url: string, form: FormData): Observable<BaseResponse> {
    var self = this;
    var config = {
      headers: { 'Content-Type': undefined }
    };
    return self.webService
      .upload(url, form, config)
      .pipe(map((res) => new BaseResponse(true, res, 'Success')));
  }
}
