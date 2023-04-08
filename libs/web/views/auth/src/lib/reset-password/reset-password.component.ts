import { Component } from '@angular/core'
import { RegisterDto } from '@md/common/models'

@Component({
  selector: 'md-reset-password-view',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss'],
})
export class ResetPasswordComponent {
  handleRegisterSubmit() {
    console.log('handleRegisterSubmit')
  }
}
