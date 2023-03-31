import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { LoginComponent } from './login/login.component'
import { RegisterComponent } from './register/register.component'
import { RouterModule } from '@angular/router'
import { WebComponentsMoleculesModule } from '@md/web/components/molecules'
import { WebComponentsAtomsModule } from '@md/web/components/atoms'

const routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent }
]

@NgModule({
  imports: [CommonModule, WebComponentsMoleculesModule, WebComponentsAtomsModule, RouterModule.forChild(routes)],
  declarations: [LoginComponent, RegisterComponent],
})
export class WebViewsAuthModule {}
