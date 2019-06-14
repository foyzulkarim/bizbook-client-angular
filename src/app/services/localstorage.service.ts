import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

import { JwtHelperService } from '@auth0/angular-jwt';
import { environment } from '../../environments/environment';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {
  storage: StorageType = StorageType.localStorage;

  constructor(private router: Router) { }

  private getStorageKey(key: any): string {
    let storageKey = LocalStorageKeys[key]
      ? LocalStorageKeys[key].toString()
      : key;
    return storageKey;
  }

  save(key: any, value: any, type?: StorageType): void {
    let storageKey = this.getStorageKey(key);
    let storageValue = JSON.stringify(value);

    this.setItem(storageKey, storageValue, type);
  }

  setItem(storageKey: string, storageValue: string, storageType: StorageType) {
    if (storageType != null) {
      this.storage = storageType;
    }

    this.storage === StorageType.localStorage
      ? localStorage.setItem(storageKey, storageValue)
      : sessionStorage.setItem(storageKey, storageValue);
  }

  getItem(storageKey: string): string {
    return this.storage === StorageType.localStorage
      ? localStorage.getItem(storageKey)
      : sessionStorage.getItem(storageKey);
  }

  removeItem(storageKey: string): void {
    this.storage === StorageType.localStorage
      ? localStorage.removeItem(storageKey)
      : sessionStorage.removeItem(storageKey);
  }

  removeAll(storageKey: string): void {
    this.storage === StorageType.localStorage
      ? localStorage.clear()
      : sessionStorage.clear();
  }

  //   save2(key: LocalStorageKeys, value: any, type?: StorageType): void {
  //     let storageKey = this.getStorageKey(key);
  //     let storageType = this.localStorageService.getStorageType();
  //     if (type != null) {
  //       storageType =
  //         type === StorageType.localStorage ? 'localStorage' : 'sessionStorage';
  //     }
  //     let service: any = this.localStorageService;
  //     service.set(storageKey, value, storageType);
  //   }

  get(key: any): any {
    let storageKey = this.getStorageKey(key);
    let strItem = this.getItem(storageKey);
    let item = JSON.parse(strItem);
    return item;
  }

  //   get2(key: LocalStorageKeys): any {
  //     let storageKey = this.getStorageKey(key);
  //     let strItem = this.localStorageService.get<string>(storageKey);
  //     return strItem;
  //   }

  remove(key: any): void {
    let storageKey = this.getStorageKey(key);
    this.removeItem(storageKey);
  }
}

export enum LocalStorageKeys {
  ShowOrderNumberAfterSave, //0
  AddToCartIfResultIsOne, // 1
  DeliveryChargeAmount, // 2
  ReceiptName, //3
  ChalanName,
  CustomerListPageNo,
  DefaultWarehouse,
  DealerPriceChange,
  SaleListPageNo,
  DueSaleListPageNo,
  PendingSaleListPageNo,
  CreatedSaleListPageNo,
  ReadyToDepartureSaleListPageNo,
  OnTheWaySaleListPageNo,
  DeliveredSaleListPageNo,
  CompletedSaleListPageNo,
  ProductGroupListPageNo,
  ProductCategoryListPageNo,
  ProductDetailsListPageNo,
  OrderState,
  DueOrderState,
  SaleListGridKeys,
  SearchKeyword,
  OrderByKeyword,
  IsAscendingValue,
  IsTaggedSale,
  SaleTag,
  SaleFrom,
  SearchDate,
  IsOnlyDues,
  startDate,
  endDate,
  WarehouseId,
  CustomerName
}

export enum StorageType {
  localStorage,
  sessionStorage
}
