import { NgModule } from "@angular/core";
import { Route, RouterModule } from "@angular/router";
import { RootLevelPath } from "./root-level.enum";
import { AuthGuard } from "@md/web/common/guards";


export const rootLevelRoutes: Route[] = [
  {
    path: RootLevelPath.UserProfile,
    canActivate: [AuthGuard],
    loadChildren: () =>
      import('@md/web/views/profile').then(
        (m) => m.WebViewsProfileModule
      ),
  },
  {
    path: RootLevelPath.Drive,
    canActivate: [AuthGuard],
    loadChildren: () =>
      import('@md/web/views/drive').then((m) => m.WebViewsDriveModule),
  },
  {
    path: RootLevelPath.Auth,
    loadChildren: () =>
      import('@md/web/views/auth').then((m) => m.WebViewsAuthModule),
  },
  {
    path: RootLevelPath.Dashboard,
    // canActivate: [AuthGuard],
    loadChildren: () =>
      import('@md/web/views/dashboard').then((m) => m.WebViewsDashboardModule),
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