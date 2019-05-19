import {Injectable, PipeTransform} from '@angular/core';

import {BehaviorSubject, Observable, of, Subject} from 'rxjs';

import {Brand} from '../_models/brand';
import {DecimalPipe} from '@angular/common';
import {debounceTime, delay, switchMap, tap} from 'rxjs/operators';
import {SortDirection} from '../directive/sortable.directive';

interface SearchResult {
  brands: Brand[];
  total: number;
}

interface State {
  page: number;
  pageSize: number;
  searchTerm: string;
  sortColumn: string;
  sortDirection: SortDirection;
}

function compare(v1, v2) {
  return v1 < v2 ? -1 : v1 > v2 ? 1 : 0;
}

function sort(brands: Brand[], column: string, direction: string): Brand[] {
  if (direction === '') {
    return brands;
  } else {
    return [...brands].sort((a, b) => {
      const res = compare(a[column], b[column]);
      return direction === 'asc' ? res : -res;
    });
  }
}

function matches(brand: Brand, term: string) {
 
  return brand.Name.toLowerCase().includes(term)
  || (brand.Address).toLowerCase().includes(term)
  || (brand.Phone).toLowerCase().includes(term);
}

@Injectable({providedIn: 'root'})
export class BrandService {
  private _loading$ = new BehaviorSubject<boolean>(true);
  private _search$ = new Subject<void>();
  private _brands$ = new BehaviorSubject<Brand[]>([]);
  private _total$ = new BehaviorSubject<number>(0);

  private _state: State = {
    page: 1,
    pageSize: 4,
    searchTerm: '',
    sortColumn: '',
    sortDirection: ''
  };

  constructor() {
    this._search$.pipe(
      tap(() => this._loading$.next(true)),
      switchMap(() => this._search()),
      tap(() => this._loading$.next(false))
    ).subscribe(result => {
      this._brands$.next(result.brands);
      this._total$.next(result.total);
    });

    this._search$.next();
  }

  get brands$() { return this._brands$.asObservable(); }
  get total$() { return this._total$.asObservable(); }
  get loading$() { return this._loading$.asObservable(); }
  get page() { return this._state.page; }
  get pageSize() { return this._state.pageSize; }
  get searchTerm() { return this._state.searchTerm; }

  set page(page: number) { this._set({page}); }
  set pageSize(pageSize: number) { this._set({pageSize}); }
  set searchTerm(searchTerm: string) { this._set({searchTerm}); }
  set sortColumn(sortColumn: string) { this._set({sortColumn}); }
  set sortDirection(sortDirection: SortDirection) { this._set({sortDirection}); }

  private _set(patch: Partial<State>) {
    Object.assign(this._state, patch);
    this._search$.next();
  }

  private _search(): Observable<SearchResult> {
    const {sortColumn, sortDirection, pageSize, page, searchTerm} = this._state;

    let brands = sort(BRANDS, sortColumn, sortDirection);

    brands = brands.filter(brand => matches(brand, searchTerm));
    const total = brands.length;

    brands = brands.slice((page - 1) * pageSize, (page - 1) * pageSize + pageSize);
    return of({brands, total});
  }
}




const BRANDS = [
  
{
    Name: "Brand 1",
    Address: "Dhaka",
    Phone: "123",
    Remarks: "abcd"
},
{
  Name: "Brand 2",
  Address: "Khulna",
  Phone: "123",
  Remarks: "abcd"
},
{
  Name: "Brand 3",
  Address: "Rajshahi",
  Phone: "123",
  Remarks: "abcd"
},
{
  Name: "Brand 4",
  Address: "Sykhet",
  Phone: "123",
  Remarks: "abcd"
},
{
  Name: "Brand 5",
  Address: "Chittagong",
  Phone: "123",
  Remarks: "abcd"
},

];
