import { Component, EventEmitter, Output, inject } from '@angular/core'
import { FormBuilder } from '@angular/forms'
import { ResetPasswordDto } from '@md/common/models'

@Component({
  selector: 'md-reset-password-form',
  templateUrl: './reset-password-form.component.html',
  styleUrls: ['./reset-password-form.component.scss'],
})
export class ResetPasswordFormComponent {
  @Output() handleResetPasswordSubmit = new EventEmitter<ResetPasswordDto>()

  fb = inject(FormBuilder);

  form = this.fb.group({
    email: this.fb.control(null),
  })

  onSubmit() {
    this.handleResetPasswordSubmit.emit({
      email: this.form.value.email || '',
    })
  }
}
