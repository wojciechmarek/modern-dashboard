import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { RouterModule } from '@angular/router';
import { WebComponentsOrganismsModule } from '@md/web/ui/organisms';
import { ResetPasswordComponent } from './reset-password/reset-password.component';

const routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  {
    path: 'reset-password',
    component: ResetPasswordComponent,
  },
];

@NgModule({
  imports: [
    CommonModule,
    WebComponentsOrganismsModule,
    RouterModule.forChild(routes),
  ],
  declarations: [LoginComponent, RegisterComponent, ResetPasswordComponent],
})
export class WebViewsAuthModule {}
