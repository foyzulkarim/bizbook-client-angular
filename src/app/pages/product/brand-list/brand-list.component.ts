import { Router } from '@angular/router';
import { Brand } from './../../../_models/brand';
import { BrandService } from './../../../_services/brand.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-brand-list',
  templateUrl: './brand-list.component.html',
  styleUrls: ['./brand-list.component.scss']
})
export class BrandListComponent implements OnInit {

  brands: Brand[] = [];
  constructor(public brandService: BrandService, private router: Router) {
    this.brands = this.brandService.getBrnads();
    console.log(this.brands);
  }

  ngOnInit() {
  }
  addBrnadLink() {
    this.router.navigate(['pages/product/bradentry']);

  }

}
