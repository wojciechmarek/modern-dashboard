import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { NavbarComponent } from './navbar/navbar.component'
import { WebComponentsAtomsModule } from '@md/web/components/atoms'
import { WebComponentsMoleculesModule } from '@md/web/components/molecules'
import { RouterModule } from '@angular/router'
import { LoginComponent } from './login/login.component'
import { ReactiveFormsModule } from '@angular/forms'
import { RegisterComponent } from './register/register.component'
import { ResetPasswordComponent } from './reset-password/reset-password.component'
import { LucideAngularModule, Menu } from 'lucide-angular'

@NgModule({
  imports: [
    CommonModule,
    WebComponentsAtomsModule,
    WebComponentsMoleculesModule,
    RouterModule,
    ReactiveFormsModule,
    LucideAngularModule.pick({ Menu }),
  ],
  declarations: [NavbarComponent, LoginComponent, RegisterComponent, ResetPasswordComponent],
  exports: [NavbarComponent, LoginComponent, RegisterComponent, ResetPasswordComponent],
})
export class WebComponentsOrganismsModule {}
