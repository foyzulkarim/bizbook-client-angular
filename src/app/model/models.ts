import { Entity } from './common';

export class Brand extends Entity {
  name: string;
  address: string;
  phone: string;
  remarks: string;
  contactPersonName: string;
  country: string;
  madeInCountry: string;
  email: string;
  brandCode: string;
}

export class Shop extends Entity {
  name: string;
  houseNo: string;
  roadNo: string;
  area: string;
  thana: string;
  district: string;
  country: string;
  phone: string;
  remarks: string;
  contactPersonName: string;
  about: string;
  wcUrl: string;
  key: string;
  secret: string;
  chalanName: string;
  receiptName: string;
  expiryDate: Date;
  hasDeliveryChain: boolean;
  isShowOrderNumber: boolean;
  isAutoAddToCart: boolean;
  deliveryCharge: number;
}

export class ProductGroup extends Entity {
  name: string;
  isActive?: boolean;
}

export class Customer extends Entity {
  constructor() {
    super();
    this.name = '';
    this.id = '00000000-0000-0000-0000-000000000000';
    this.point = 0;
    this.membershipCardNo = '';
    this.addresses = [];
    this.phone = '';
  }

  membershipCardNo: string;
  name: string;
  occupation: string;
  university: string;
  company: string;
  phone: string;
  email: string;
  nationalId: string;
  imageUrl: string;

  point: number;
  remarks: string;
  isActive: boolean;
  addresses: CustomerAddress[];
}

export class CustomerAddress extends Entity {
  constructor() {
    super();
    this.country = 'Bangladesh';
    this.district = 'Dhaka';
    this.thana = this.getThana();
    this.area = this.getArea();
  }
  public addressName: string;
  public isDefault: boolean;
  public contactName: string;
  public contactPhone: string;
  public streetAddress: string;
  public area: string;
  public thana: string;
  public postCode: string;
  public district: string;
  public country: string;
  public specialNote: string;
  public customerId: string;
  public customer: Customer;
  public isActive: boolean;

  setThana(selectedThana: string) {
    localStorage.setItem('selectedThana', selectedThana);
  }

  private getThana(): string {
    return localStorage.getItem('selectedThana');
  }

  setArea(selectedArea: string) {
    localStorage.setItem('selectedArea', selectedArea);
  }

  private getArea(): string {
    return localStorage.getItem('selectedArea');
  }
}

export class CustomerPointViewModel {
  constructor() {
    this.pointTotal = 0;
  }
  pointTotal: number;
}
