import { NgModule } from '@angular/core'
import { Route, RouterModule } from '@angular/router'
import { RootLevelPath } from '@md/web/common'

export const rootLevelRoutes: Route[] = [
  {
    path: RootLevelPath.UserProfile,
    loadChildren: () =>
      import('@md/web/views/user-profile').then(
        (m) => m.WebViewsUserProfileModule
      ),
  },
  {
    path: RootLevelPath.Drive,
    loadChildren: () =>
      import('@md/web/views/drive').then(
        (m) => m.WebViewsDriveModule
      ),
  },
  {
    path: RootLevelPath.Auth,
    loadChildren: () =>
      import('@md/web/views/auth').then(
        (m) => m.WebViewsAuthModule
      ),
  },
  {
    path: RootLevelPath.Dashboard,
    loadChildren: () =>
      import('@md/web/views/dashboard').then((m) => m.WebViewsDashboardModule),
  },
]

@NgModule({
  imports: [
    RouterModule.forRoot(rootLevelRoutes, {
      initialNavigation: 'enabledBlocking',
    }),
  ],
})
export class RootLevelRoutingModule {}
