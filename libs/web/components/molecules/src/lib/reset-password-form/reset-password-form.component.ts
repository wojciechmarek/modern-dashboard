import { Component, EventEmitter, Output, inject } from '@angular/core'
import { FormBuilder, Validators } from '@angular/forms'
import { RegisterDto } from '@md/common/models'

@Component({
  selector: 'md-reset-password-form',
  templateUrl: './reset-password-form.component.html',
  styleUrls: ['./reset-password-form.component.scss'],
})
export class ResetPasswordFormComponent {
  @Output() handleResetPasswordSubmit = new EventEmitter<RegisterDto>()

  fb = inject(FormBuilder);

  form = this.fb.group({
    email: this.fb.control(null, { validators: [Validators.required], updateOn: 'blur'}),
  })

  onSubmit() {
    this.handleResetPasswordSubmit.emit({
      email: this.form.value.email || '',
      password: ""
    })
  }
}
