import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrandLogoComponent } from './brand-logo/brand-logo.component';
import { WebComponentsAtomsModule } from '@md/web/ui/atoms';
import { NavbarUserManagerComponent } from './navbar-user-manager/navbar-user-manager.component';
import { HeaderTextComponent } from './header-text/header-text.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { RegisterFormComponent } from './register-form/register-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ResetPasswordFormComponent } from './reset-password-form/reset-password-form.component';
import {
  LucideAngularModule,
  Search,
  Bell,
  User,
  Grip,
  Home,
  SquareGantt,
  Presentation,
  Factory,
  Users2,
  Cloud,
  Settings,
} from 'lucide-angular';
import { RouterModule } from '@angular/router';
import { DashboardTileHeaderComponent } from './dashboard-tile-header/dashboard-tile-header.component';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    WebComponentsAtomsModule,
    ReactiveFormsModule,
    RouterModule,
    TranslateModule,
    LucideAngularModule.pick({
      Search,
      Bell,
      User,
      Grip,
      Home,
      SquareGantt,
      Presentation,
      Factory,
      Users2,
      Cloud,
      Settings,
    }),
  ],
  declarations: [
    BrandLogoComponent,
    NavbarUserManagerComponent,
    HeaderTextComponent,
    LoginFormComponent,
    RegisterFormComponent,
    ResetPasswordFormComponent,
    DashboardTileHeaderComponent,
  ],
  exports: [
    BrandLogoComponent,
    NavbarUserManagerComponent,
    HeaderTextComponent,
    LoginFormComponent,
    RegisterFormComponent,
    ResetPasswordFormComponent,
    DashboardTileHeaderComponent,
  ],
})
export class WebComponentsMoleculesModule {}
