import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { NavbarComponent } from './navbar/navbar.component'
import { WebComponentsAtomsModule } from '@md/web/components/atoms'
import { WebComponentsMoleculesModule } from '@md/web/components/molecules'
import { RouterModule } from '@angular/router'
import { LoginFormComponent } from './login-form/login-form.component'

@NgModule({
  imports: [
    CommonModule,
    WebComponentsAtomsModule,
    WebComponentsMoleculesModule,
    RouterModule,
  ],
  declarations: [NavbarComponent, LoginFormComponent],
  exports: [NavbarComponent, LoginFormComponent],
})
export class WebComponentsOrganismsModule {}
