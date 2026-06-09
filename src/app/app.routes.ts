import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./features/products/products.component').then(
        (m) => m.ProductsComponent
      ),
    title: 'ShopHere — All Products',
  },
  {
    path: 'cart',
    loadComponent: () =>
      import('./features/cart-contact/cart-contact.component').then(
        (m) => m.CartContactComponent
      ),
    title: 'ShopHere — Cart & Contact',
    children: [
      {
        path: '',
        redirectTo: 'items',
        pathMatch: 'full',
      },
      {
        path: 'items',
        loadComponent: () =>
          import('./features/cart-contact/cart/cart.component').then(
            (m) => m.CartComponent
          ),
        title: 'ShopHere — Cart',
      },
      {
        path: 'contact',
        loadComponent: () =>
          import('./features/cart-contact/contact/contact.component').then(
            (m) => m.ContactComponent
          ),
        title: 'ShopHere — Contact Us',
      },
    ],
  },
  {
    path: '**',
    redirectTo: '',
  },
];