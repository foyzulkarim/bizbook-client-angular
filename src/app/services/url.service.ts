export class UrlService {
  identityBaseUrl: string;
  identityBaseApi: string;
  inventoryBaseUrl: string;
  inventoryBaseApi: string;
  signalrBaseUrl: string;

  signinUrl: string;
  registerUrl: string;

  constructor() {
    this.setLocalhost();

    this.registerUrl = this.identityBaseApi + '/Account/Register';

    this.signinUrl = this.identityBaseApi + '/token';

    // brand
    this.brand = this.inventoryBaseApi + '/Brand';
    this.brandQuery = this.inventoryBaseApi + '/BrandQuery';

    this.shop = this.inventoryBaseApi + '/Shop';
    this.shopQuery = this.inventoryBaseApi + '/ShopQuery';
  }

  private setLocalhost(): void {
    let identityServer = 'http://localhost:52894';
    this.identityBaseUrl = identityServer;
    this.identityBaseApi = this.identityBaseUrl + '/api';
    this.signinUrl = this.identityBaseUrl + '/token';

    let inventoryServer = 'http://localhost:52894';
    this.inventoryBaseUrl = inventoryServer;
    this.inventoryBaseApi = this.inventoryBaseUrl + '/api';

    this.signalrBaseUrl = inventoryServer;
  }

  dashboard: string;
  // brands
  brand: string;
  brandQuery: string;
  shop: string;
  shopQuery: string;
  
}
