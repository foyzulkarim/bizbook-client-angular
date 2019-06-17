import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent {
  displayKeys = false;
  showManageColumnsButton = true;

  @Input() searchRequest;
  @Input() totalCount;

  @Output()
  pageNate = new EventEmitter<string>();

  @Output()
  searchPage = new EventEmitter<string>();

  constructor() {}

  goto(pageNo: string) {
    this.pageNate.emit(pageNo);
  }

  search() {
    this.searchPage.emit('search');
  }
}
