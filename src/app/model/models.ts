import { Entity } from './common';

export class Brand extends Entity {
  Name: string;
  Address: string;
  Phone: string;
  Remarks?: string;
  ContactPersonName?: string;
  Country?: string;
  MadeInCountry?: string;
  Email?: string;
  ShopId?: string;
  IsActive?: boolean;
}

export class Shop extends Entity {
  Name: String;
  StreetAddress: String;
  Area: String;
  Thana: String;
  PostCode: String;
  District: String;
  Country: String;
  ContactPersonName: String;
  ContactPersonPhone: String;
  ContactPersonDesignation: String;
  Phone: String;
  Website: String;
  Email: String;
  Facebook: String;
  Remarks: String;
  About: String;
  RegistrationDate: Date;
  ExpiryDate: Date;
  IsDeleted: Boolean;
  SubscriptionType: String;
  TotalUsers: String;
  IsVerified: String;
  WcUrl: String;
  LogoUrl: String;
  HasDeliveryChain: Boolean;
  IsShowOrderNumber: Boolean;
  IsAutoAddToCart: Boolean;
  DeliveryCharge: Number;
  ReceiptName: String;
  ChalanName: String;
  WcKey: String;
  WcSecret: String;
  WcWebhookSource: String;
  WcVersion: String;
  IsActive: Boolean;
}
