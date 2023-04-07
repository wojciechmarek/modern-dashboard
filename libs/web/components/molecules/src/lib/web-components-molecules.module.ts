import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { BrandLogoComponent } from './brand-logo/brand-logo.component'
import { WebComponentsAtomsModule } from '@md/web/components/atoms'
import { DesktopMenuLinksComponent } from './desktop-menu-links/desktop-menu-links.component'
import { DesktopMenuButtonsComponent } from './desktop-menu-buttons/desktop-menu-buttons.component'
import { HeaderTextComponent } from './header-text/header-text.component'
import { LoginFormComponent } from './login-form/login-form.component'
import { RegisterFormComponent } from './register-form/register-form.component'
import { ReactiveFormsModule } from '@angular/forms'

@NgModule({
  imports: [CommonModule, WebComponentsAtomsModule, ReactiveFormsModule],
  declarations: [
    BrandLogoComponent,
    DesktopMenuLinksComponent,
    DesktopMenuButtonsComponent,
    HeaderTextComponent,
    LoginFormComponent,
    RegisterFormComponent
  ],
  exports: [
    BrandLogoComponent,
    DesktopMenuLinksComponent,
    DesktopMenuButtonsComponent,
    HeaderTextComponent,
    LoginFormComponent,
    RegisterFormComponent
  ],
})
export class WebComponentsMoleculesModule {}
