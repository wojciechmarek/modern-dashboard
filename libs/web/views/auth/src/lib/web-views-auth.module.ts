import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { LoginComponent } from './login/login.component'
import { RegisterComponent } from './register/register.component'

@NgModule({
  imports: [CommonModule],
  declarations: [LoginComponent, RegisterComponent],
})
export class WebViewsAuthModule {}
