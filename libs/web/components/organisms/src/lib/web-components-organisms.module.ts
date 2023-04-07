import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { NavbarComponent } from './navbar/navbar.component'
import { WebComponentsAtomsModule } from '@md/web/components/atoms'
import { WebComponentsMoleculesModule } from '@md/web/components/molecules'
import { RouterModule } from '@angular/router'
import { LoginComponent } from './login/login.component'
import { ReactiveFormsModule } from '@angular/forms'
import { RegisterComponent } from './register/register.component'

@NgModule({
  imports: [
    CommonModule,
    WebComponentsAtomsModule,
    WebComponentsMoleculesModule,
    RouterModule,
    ReactiveFormsModule
  ],
  declarations: [NavbarComponent, LoginComponent, RegisterComponent],
  exports: [NavbarComponent, LoginComponent, RegisterComponent],
})
export class WebComponentsOrganismsModule {}
