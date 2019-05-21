import { Router } from '@angular/router';
import { SaveService } from '../../../services/save.service';
import { UrlService } from '../../../services/url.service';

import { Brand } from './../../../model/models';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-brand-entry',
  templateUrl: './brand-entry.component.html',
  styleUrls: ['./brand-entry.component.scss']
})
export class BrandEntryComponent implements OnInit {
  model = new Brand();
  urlList = new UrlService();

  constructor(
    private saveService: SaveService,
    private urlService: UrlService,
    private router: Router
  ) {}

  ngOnInit() {}
  save() {
    this.saveService
      .save(this.model, this.urlService.brand + '/add')
      .subscribe(
        (res) => console.log('HTTP response', res),
        (err) => console.log('HTTP Error', err)
      );
  }
}
