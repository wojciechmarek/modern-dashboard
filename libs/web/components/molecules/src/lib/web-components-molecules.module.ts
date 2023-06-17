import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrandLogoComponent } from './brand-logo/brand-logo.component';
import { WebComponentsAtomsModule } from '@md/web/components/atoms';
import { NavbarMenuLinksComponent } from './navbar-menu-links/navbar-menu-links.component';
import { NavbarUserManagerComponent } from './navbar-user-manager/navbar-user-manager.component';
import { HeaderTextComponent } from './header-text/header-text.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { RegisterFormComponent } from './register-form/register-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ResetPasswordFormComponent } from './reset-password-form/reset-password-form.component';
import { LucideAngularModule, Search, Bell, User } from 'lucide-angular';
import { RouterModule } from '@angular/router';
import { DashboardTileHeaderComponent } from './dashboard-tile-header/dashboard-tile-header.component';

@NgModule({
  imports: [
    CommonModule,
    WebComponentsAtomsModule,
    ReactiveFormsModule,
    RouterModule,
    LucideAngularModule.pick({ Search, Bell, User }),
  ],
  declarations: [
    BrandLogoComponent,
    NavbarMenuLinksComponent,
    NavbarUserManagerComponent,
    HeaderTextComponent,
    LoginFormComponent,
    RegisterFormComponent,
    ResetPasswordFormComponent,
    DashboardTileHeaderComponent,
  ],
  exports: [
    BrandLogoComponent,
    NavbarMenuLinksComponent,
    NavbarUserManagerComponent,
    HeaderTextComponent,
    LoginFormComponent,
    RegisterFormComponent,
    ResetPasswordFormComponent,
    DashboardTileHeaderComponent,
  ],
})
export class WebComponentsMoleculesModule {}
