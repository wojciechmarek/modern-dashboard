import { Component, EventEmitter, Output } from '@angular/core';
import { LoginDto } from '@md/common/models';

@Component({
  selector: 'md-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  @Output() handleLoginSubmit = new EventEmitter<LoginDto>();
}
