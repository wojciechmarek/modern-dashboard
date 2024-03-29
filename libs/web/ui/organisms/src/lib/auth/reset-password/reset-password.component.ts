import { Component, EventEmitter, Output } from '@angular/core';
import { ResetPasswordDto } from '@md/common/models';

@Component({
  selector: 'md-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss'],
})
export class ResetPasswordComponent {
  @Output() handleResetPasswordSubmit = new EventEmitter<ResetPasswordDto>();
}
