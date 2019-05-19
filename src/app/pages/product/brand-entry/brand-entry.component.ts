import { Router } from '@angular/router';
import { BrandService } from './../../../_services/brand.service';
import { Brand } from './../../../_models/brand';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-brand-entry',
  templateUrl: './brand-entry.component.html',
  styleUrls: ['./brand-entry.component.scss']
})
export class BrandEntryComponent implements OnInit {

  model = new Brand();
  constructor(private brandService: BrandService, private router: Router) { }

  ngOnInit() {
    
  }
  save() {
    // this.brandService.save(this.model);
    // alert('Save');
    // this.router.navigate(['pages/product/brandlist']);
  }

}
