export class Entity {
  id: string;
  created: string;
  createdBy: string;
  createdFrom: string;
  modified: string;
  modifiedBy: string;
  shopId: string;

  constructor() {
    this.id = '00000000-0000-0000-0000-000000000000';
    this.created = new Date().toJSON();
    this.modified = new Date().toJSON();
    this.createdBy = '1';
    this.modifiedBy = '1';
    this.shopId = '00000000-0000-0000-0000-000000000001';
    this.createdFrom = 'Browser';
  }
}

export class DataRequest {
  id: string;
  page: number;
  perPageCount: number;
  orderBy: string;
  keyword: string;
  isAscending: string;
  parentId: string;
  totalPage: number;
  startDate: string;
  endDate: string;
  shopId: string;
  dateRange: string;
  isIncludeParents: boolean;
  warehouseId: string;
}

export class SearchRequest extends DataRequest {
  constructor(
    keyword = '',
    orderBy = 'Modified',
    isAsc = 'false',
    parentId = ''
  ) {
    super();
    this.keyword = keyword;
    this.orderBy = orderBy;
    this.isAscending = isAsc;
    this.parentId = parentId;
    this.page = 1;
  }
}

export class DetailRequest extends DataRequest {
  id: string;

  constructor(id: string) {
    super();
    this.id = id;
  }

  GetQueryString(): string {
    return `?id=${this.id}`;
  }
}

export class BaseResponse {
  isSuccess: boolean;
  data: any;
  message: string;

  constructor(isSuccess: boolean, data: any, message: string) {
    this.isSuccess = isSuccess;
    this.data = data;
    this.message = message == null ? 'Success' : message;
  }
}

export class PermissionResponse extends BaseResponse {
  isAllowed: boolean;
}

export class ErrorResponse extends BaseResponse {
  Exception: string;
}

export class SearchResponse extends BaseResponse {
  constructor(data: any) {
    super(true, data, 'Success');
    this.Models = data.item1;
    this.Count = data.item2;
  }

  Models: Object[];
  Count: number;
}
