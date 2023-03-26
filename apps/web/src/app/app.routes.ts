import { Route } from '@angular/router';
import { RootLevelPath } from '@md/web/utilities/constants';

export const appRoutes: Route[] = [
  {
    path: RootLevelPath.Dashboard,
    loadChildren: () =>
      import('@md/web/views/dashboard').then(
        (m) => m.WebViewsDashboardModule
      ),
  },
  {
    path: RootLevelPath.UserProfile,
    loadChildren: () =>
      import('@md/web/views/user-profile').then(
        (m) => m.WebViewsUserProfileModule
      ),
  },
];
