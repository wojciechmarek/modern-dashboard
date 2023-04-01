import { Component, EventEmitter, Output } from '@angular/core'
import { FormBuilder, Validators } from '@angular/forms'
import { LoginDto } from '@md/common/models'

@Component({
  selector: 'md-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss'],
})
export class LoginFormComponent {
  @Output() handleLoginSubmit = new EventEmitter<LoginDto>()

  constructor(private readonly fb: FormBuilder) {}

  form = this.fb.group({
    email: this.fb.control('', {
      validators: [Validators.required, Validators.email],
    }),
    password: this.fb.control('', { validators: [Validators.required] }),
    isRememberMeChecked: this.fb.control(false),
  })

  onSubmit() {
    this.handleLoginSubmit.emit({
      email: this.form.value.email || '',
      password: this.form.value.password || '',
      isRememberMeChecked: this.form.value.isRememberMeChecked || false,
    })
  }
}
