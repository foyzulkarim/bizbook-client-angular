import { NbMenuItem } from '@nebular/theme';

export const MENU_ITEMS: NbMenuItem[] = [
  {
    title: 'Dashboard',
    icon: 'nb-home',
    link: '/pages/dashboard',
    home: true
  },
  {
    title: 'FEATURES',
    group: true
  },

  {
    title: 'Product',
    icon: 'nb-compose',
    children: [
      {
        title: 'BrandEntry',
        link: '/pages/product/brandentry'
      },
      {
        title: 'BrandList',
        link: '/pages/product/brandlist'
      }
    ]
  },
  {
    title: 'Setup',
    icon: 'nb-compose',
    children: [
      {
        title: 'Shop',
        link: '/pages/setup/shop'
      },
      {
        title: 'Shop Entry',
        link: '/pages/setup/shopentry'
      }
    ]
  }
];
