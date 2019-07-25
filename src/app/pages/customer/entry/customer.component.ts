import { Router, ActivatedRoute } from '@angular/router';
import { SaveService } from '../../../services/save.service';
import { UrlService } from '../../../services/url.service';

import { Component, OnInit } from '@angular/core';
import { BaseComponent } from '../../../common/base.component';
import { SearchService } from '../../../services/search.service';
import { AuthService } from '../../../services/auth.service';
import { Customer, CustomerPointViewModel } from '../Model';

@Component({
  selector: 'app-customer-entry',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.scss']
})
export class CustomerEntryComponent extends BaseComponent<Customer>
  implements OnInit {
  model = new Customer();
  urlList = new UrlService();

  customerImage: any;
  customerProfileImageUrl: any;

  customerNid1Image: any;
  customerNid1ImageUrl: any;

  customerNid2Image: any;
  customerNid2ImageUrl: any;

  constructor(
    search: SearchService,
    save: SaveService,
    authService: AuthService,
    url: UrlService,
    router: Router,
    private activeRoute: ActivatedRoute
  ) {
    super(
      router,
      url,
      search,
      save,
      authService,
      url.customer,
      url.customerQuery
    );

    console.log('Hello ....');
  }

  ngOnInit() {
    this.activeRoute.params.subscribe((params) => {
      this.isUpdateMode = false;
      if (params['id']) {
        this.isUpdateMode = true;
        this.edit2(params['id']);
      }
    });
  }

  customerPointViewModel: CustomerPointViewModel;

  history(p: Customer): void {
    var self = this;
    // self.stateService.go('root.customerhistory', {
    //   customer: {
    //     Id: p.id,
    //     Name: p.name,
    //     Phone: p.phone,
    //     MembarshipCardNo: p.membershipCardNo
    //   }
    // });
  }

  report(): void {
    var self = this;
    //window.open(self.url.customerQueryReport, '_blank', '');
  }

  getBarcode(): void {
    var self = this;
    var successCallback = (response: any): void => {
      if (self.model == null) {
        self.model = new Customer();
      }
      self.model.membershipCardNo = response;
    };
    var errorCallback = (error: any): void => {
      console.log(error);
    };

    self.searchService
      .get(self.url.customerQueryBarcode)
      .subscribe(successCallback, errorCallback);
  }

  getTotal(): CustomerPointViewModel {
    var self = this;
    self.customerPointViewModel = new CustomerPointViewModel();
    var customers: Customer[] = self.models;
    for (var i = 0; i < customers.length; i++) {
      var p = customers[i];
      self.customerPointViewModel.pointTotal += parseFloat(
        p['point'].toString() !== '' ? p['point'].toString() : '0'
      );
    }
    return self.customerPointViewModel;
  }

  uploadImage(fileName: string, type: string): void {
    var self = this;
    let file = self[fileName] as File;
    let folderName = 'customers';
    var fd = new FormData();
    fd.append('folderName', folderName);
    fd.append('id', self.model.id);
    fd.append('type', type);
    fd.append('file', file);
    self.uploadContent(fd, folderName, self.model.id, type);
  }

  loadImage(model, self): void {
    var random = new Date().toString();
    self['customerProfileImageUrl'] =
      self.url.getImage +
      '?folderName=customers&id=' +
      self.model.id +
      '&name=profile.jpeg&timestamp=' +
      random;
    self['customerNid1ImageUrl'] =
      self.url.getImage +
      '?folderName=customers&id=' +
      self.model.id +
      '&name=nid1.jpeg&timestamp=' +
      random;
    self['customerNid2ImageUrl'] =
      self.url.getImage +
      '?folderName=customers&id=' +
      self.model.id +
      '&name=nid2.jpeg&timestamp=' +
      random;
  }

  uploadContent(
    fd: FormData,
    folderName: string,
    id: string,
    type: string
  ): void {
    let self = this;
    self.saveService.upload(self.url.uploadImage, fd).subscribe(
      (response): any => {
        self.loadImage(self.model, self);
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
