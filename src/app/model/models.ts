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
  expiryDate: Date;
  wcUrl: string;
  key: string;
  secret: string;
  hasDeliveryChain: boolean;
  chalanName: string;
  receiptName: string;
  isShowOrderNumber: boolean;
  isAutoAddToCart: boolean;
  deliveryCharge: number;
}
