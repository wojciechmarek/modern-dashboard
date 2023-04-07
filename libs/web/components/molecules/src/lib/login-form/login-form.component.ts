import { Component, EventEmitter, Output, inject } from '@angular/core'
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms'
import { LoginDto } from '@md/common/models'

@Component({
  selector: 'md-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss'],
})
export class LoginFormComponent {
  @Output() handleLoginSubmit = new EventEmitter<LoginDto>()

  fb = inject(FormBuilder);

  form = new FormGroup({
    email: new FormControl(null, [Validators.email]),
    password: this.fb.control(null, { validators: [Validators.required] }),
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
