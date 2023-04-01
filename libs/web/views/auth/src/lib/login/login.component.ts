import { Component } from '@angular/core'
import { LoginDto } from '@md/common/models'

@Component({
  selector: 'md-login-view',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  handleLoginSubmit(data: LoginDto) {
    console.log("Logging data....", data)
  }
}
