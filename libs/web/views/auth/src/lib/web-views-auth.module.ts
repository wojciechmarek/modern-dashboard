import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { LoginComponent } from './login/login.component'
import { RegisterComponent } from './register/register.component'
import { RouterModule } from '@angular/router'
import { WebComponentsOrganismsModule } from '@md/web/components/organisms'

const routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
]

@NgModule({
  imports: [
    CommonModule,
    WebComponentsOrganismsModule,
    RouterModule.forChild(routes),
  ],
  declarations: [LoginComponent, RegisterComponent],
})
export class WebViewsAuthModule {}
