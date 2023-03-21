import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: '',
    loadChildren: () =>
      import('@modern-dashboard/web/views/dashboard').then(
        (m) => m.WebViewsDashboardModule
      ),
  },
  {
    path: 'user-profile',
    loadChildren: () =>
      import('@modern-dashboard/web/views/user-profile').then(
        (m) => m.WebViewsUserProfileModule
      ),
  },
];
