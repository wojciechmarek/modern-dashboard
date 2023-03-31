import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { LoginComponent } from './login/login.component'
import { RegisterComponent } from './register/register.component'
import { RouterModule } from '@angular/router'

const routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent }
]

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes)],
  declarations: [LoginComponent, RegisterComponent],
})
export class WebViewsAuthModule {}
