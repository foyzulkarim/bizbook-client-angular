import {
  Entity,
  SearchRequest,
  SearchResponse,
  BaseResponse
} from '../model/common';
import { UrlService } from '../services/url.service';
import { SearchService } from '../services/search.service';
import { SaveService } from '../services/save.service';
import { AuthService } from '../services/auth.service';
import {
  LocalStorageService,
  LocalStorageKeys
} from '../services/localstorage.service';

import { UserInfo } from '../model/security.model';
import { Router } from '@angular/router';

export class Display {
  static log(m: any, params?: any[]): void {
    if (params) {
      console.log(m, params);
    } else {
      console.log(m);
    }
  }
}

export class Dictionary {
  items: KeyValuePair[];

  constructor() {
    this.items = [];
  }

  set(k: any, v: any): void {
    this.items[k] = v;
    Display.log(this.items);
  }

  get(k: any): any {
    let item = this.items[k];
    return item;
  }
}

export class KeyValuePair {
  key: any;
  value: any;
}

export class Guid {
  public static newGuid() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
      var r = (Math.random() * 16) | 0,
        v = c === 'x' ? r : (r & 0x3) | 0x8;
      return v.toString(16);
    });
  }

  public static defaultGuid() {
    return '00000000-0000-0000-0000-000000000000';
  }
}

export class BaseComponent<T extends Entity> {
  searchService: SearchService;
  saveService: SaveService;
  authService: AuthService;
  url: UrlService;
  localStorageService: LocalStorageService;

  dropdown: Object;
  subUrlPath: string;

  // my variables
  searchRequest: SearchRequest;
  isUpdateMode: boolean;
  user: UserInfo;

  // generic variables
  commandUrl: string;
  queryUrl: string;
  models: T[];
  headers: string[] = ['id', 'modified'];
  keys: KeyValuePair[] = [];
  totalCount: number;
  model: T;

  showManageColumnsButton: boolean;

  orderStates: string[] = [];

  showChart: boolean = false;

  router: Router;

  constructor(
    router: Router,
    url: UrlService,
    search: SearchService,
    save: SaveService,
    authService: AuthService,
    commandUrl: string,
    queryUrl: string
  ) {
    this.router = router;
    this.url = url;
    //this.subUrlPath = url.clientSubFolder;
    this.commandUrl = commandUrl;
    this.queryUrl = queryUrl;
    this.searchService = search;
    this.saveService = save;
    this.authService = authService;
    var acc = this.authService.accountInfo;
    if (acc && acc.isAuth) {
      this.loadUser();
    }
    this.activate();
  }

  loadUser(): void {
    var self = this;
    self.user = this.authService.accountInfo;
  }

  goto(page: number): void {
    this.searchRequest.page = page;
    this.search();
  }

  createInstance<Entity>(c: new () => Entity): Entity {
    return new c();
  }

  activate() {
    this.model = this.createInstance(Entity) as T;
    this.model.id = '';
    this.models = [];
    this.isUpdateMode = false;
    this.totalCount = 0;
    this.searchRequest = new SearchRequest('', 'Modified', 'False', '');
    this.searchRequest.page = 1;
    this.startDate = new Date();
    this.endDate = new Date();

    //this.search();
  }

  navigateState(url: string, param?: any): void {
    if (param) {
      this.router.navigate([url], { queryParams: param });
    } else {
      this.router.navigateByUrl(url);
    }
  }

  search(): void {
    var self = this;
    var successCallback = (response: SearchResponse): void => {
      self.totalCount = response.Count;
      self.models = <any>response.Models;

      if (self.models.length === 0) {
        console.log('No search result found');
        alert('No search result found');
      }
      self.searchRequest.totalPage = Math.ceil(response.Count / 10);
    };
    var errorCallback = (error: any): void => {
      console.log(error);
    };
    self.searchService
      .search(self.searchRequest, self.queryUrl + '/Search')
      .subscribe(<any>successCallback, errorCallback);
  }

  edit(id: string): void {
    var self = this;
    var onSuccess = (data: SearchResponse) => {
      self.model = data.data;
    };

    var onError = (error: any) => {
      console.log(error);
      alert('Error occurred');
    };
    var searchRequest = new SearchRequest();
    searchRequest.id = id;

    var url = self.queryUrl + '/Detail';
    if (id && id.length > 0) {
      url += '?id=' + id;
    }

    self.searchService.search(null, url).subscribe(onSuccess, onError);
  }

  editWithCallBack(id: string, callBack: Function): void {
    var self = this;
    var onSuccess = (data: SearchResponse) => {
      self.model = data.data;
      callBack(self.model, self);
    };

    var onError = (error: any) => {
      console.log(error);
      alert('Error occurred');
    };
    var searchRequest = new SearchRequest();
    searchRequest.id = id;

    var url = self.queryUrl + '/Detail';
    if (id && id.length > 0) {
      url += '?id=' + id;
    }

    self.searchService.search(null, url).subscribe(onSuccess, onError);
  }

  edit2(id: string): void {
    var self = this;
    var onSuccess = (data: SearchResponse) => {
      self.model = data.data;
    };

    var onError = (error: any) => {
      console.log(error);
      alert('Error occurred');
    };

    var searchRequest = new SearchRequest();
    searchRequest.id = id;

    var url = self.queryUrl + '/SearchDetail';
    self.searchService.search(searchRequest, url).subscribe(onSuccess, onError);
  }

  save(): void {
    var self = this;

    if (self.isUpdateMode) self.update();
    else {
      var successCallback = (response: BaseResponse): void => {
        self.activate();
      };
      var errorCallback = (error: any): void => {
        console.log(error);
        if (error.status === 500) {
          alert(error.data.exceptionMessage);
        }
      };

      self.saveService
        .save(self.model, self.commandUrl + '/Add')
        .subscribe(<any>successCallback, errorCallback);
    }
  }

  update(): void {
    var self = this;
    var successCallback = (response: BaseResponse): void => {
      self.activate();
      self.back();
    };
    var errorCallback = (error: any): void => {
      console.log(error);
    };

    self.saveService
      .update(self.model, self.commandUrl + '/Edit')
      .subscribe(<any>successCallback, errorCallback);
  }

  updateWithCallBack(m: T, fn: Function, e: Function): void {
    let self = this;
    var successCallback = (response: BaseResponse): void => {
      fn();
    };
    var errorCallback = (error: any): void => {
      console.log(error);
      e();
    };

    self.saveService
      .update(m, self.commandUrl + '/Edit')
      .subscribe(successCallback, errorCallback);
  }

  update2(p: T): void {
    let self = this;
    let succsessCallBack = () => {
      p['message'] = 'Updated Now';
    };

    let error = (e) => {
      alert(e);
    };

    self.updateWithCallBack(p, succsessCallBack, error);
  }

  delete(id: string): void {
    var self = this;
    var successCallback = (response: BaseResponse): void => {
      self.activate();
    };
    var errorCallback = (error: any): void => {
      console.log(error);
    };
    self.saveService
      .delete(id, self.commandUrl + '/Delete')
      .subscribe(successCallback, errorCallback);
  }

  back(): void {
    window.history.back();
  }

  toggleSort(property: string): void {
    var self = this;
    self.searchRequest.isAscending =
      self.searchRequest.isAscending === 'false' ? 'true' : 'false';
    self.searchRequest.orderBy = property;
    self.search();
  }

  startDate: Date;
  startDatePopUp: boolean;
  hideStartDate: boolean;

  endDate: Date;
  endDatePopUp: boolean;
  hideEndDate: boolean;
}
