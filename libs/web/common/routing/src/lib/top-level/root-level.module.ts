import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { RootLevelPath } from './root-level.enum';
import { AuthGuard } from '@md/web/common/guards';

export const rootLevelRoutes: Route[] = [
  {
    path: RootLevelPath.Dashboard,
    // canActivate: [AuthGuard],
    loadChildren: () =>
      import('@md/web/feature/dashboard').then(m => m.WebViewsDashboardModule),
  },
  {
    path: RootLevelPath.Projects,
    canActivate: [AuthGuard],
    loadChildren: () =>
      import('@md/web/feature/drive').then(m => m.WebViewsDriveModule),
  },
  {
    path: RootLevelPath.Cloud,
    canActivate: [AuthGuard],
    loadChildren: () =>
      import('@md/web/feature/drive').then(m => m.WebViewsDriveModule),
  },
  {
    path: RootLevelPath.Clients,
    canActivate: [AuthGuard],
    loadChildren: () =>
      import('@md/web/feature/drive').then(m => m.WebViewsDriveModule),
  },
  {
    path: RootLevelPath.Employees,
    canActivate: [AuthGuard],
    loadChildren: () =>
      import('@md/web/feature/drive').then(m => m.WebViewsDriveModule),
  },
  {
    path: RootLevelPath.Auth,
    loadChildren: () =>
      import('@md/web/feature/auth').then(m => m.WebViewsAuthModule),
  },
  {
    path: RootLevelPath.Settings,
    loadChildren: () =>
      import('@md/web/feature/settings').then(m => m.WebViewsSettingsModule),
  },
  {
    path: RootLevelPath.NotFound,
    // canActivate: [AuthGuard],
    loadChildren: () =>
      import('@md/web/feature/not-found').then(m => m.WebFeatureNotFoundModule),
  },
];

@NgModule({
  imports: [
    RouterModule,
    RouterModule.forRoot(rootLevelRoutes, {
      initialNavigation: 'enabledBlocking',
    }),
  ],
})
export class RootLevelRoutingModule {}
