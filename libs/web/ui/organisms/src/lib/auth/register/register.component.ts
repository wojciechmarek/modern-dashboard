import { Component, EventEmitter, Output } from '@angular/core'
import { RegisterDto } from '@md/common/models'

@Component({
  selector: 'md-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent {
  @Output() handleRegisterSubmit = new EventEmitter<RegisterDto>();
}
