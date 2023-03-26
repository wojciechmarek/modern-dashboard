import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: '',
    loadChildren: () =>
      import('@md/web/views/dashboard').then(
        (m) => m.WebViewsDashboardModule
      ),
  },
  {
    path: 'user-profile',
    loadChildren: () =>
      import('@md/web/views/user-profile').then(
        (m) => m.WebViewsUserProfileModule
      ),
  },
];
