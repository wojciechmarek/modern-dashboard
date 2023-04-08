import { Component, EventEmitter, Output, inject } from '@angular/core'
import { AbstractControl, FormBuilder, Validators } from '@angular/forms'
import { RegisterDto } from '@md/common/models'

@Component({
  selector: 'md-reset-password-form',
  templateUrl: './reset-password-form.component.html',
  styleUrls: ['./reset-password-form.component.scss'],
})
export class ResetPasswordFormComponent {
  @Output() handleRegisterSubmit = new EventEmitter<RegisterDto>()

  fb = inject(FormBuilder);

  form = this.fb.group({
    email: this.fb.control(null, { validators: [Validators.required], updateOn: 'blur'}),
    password: this.fb.control(null, { validators: [Validators.required] }),
    confirmPassword: this.fb.control(null, { validators: [Validators.required] }),
    isTermsChecked: this.fb.control(false, { validators: [Validators.requiredTrue] }),
  }, { validators: [this.checkIfPasswordsAreTheSame] })

  onSubmit() {
    this.handleRegisterSubmit.emit({
      email: this.form.value.email || '',
      password: this.form.value.password || '',
    })
  }

  checkIfPasswordsAreTheSame(control: AbstractControl) {
    const { password, confirmPassword } = control.value;
    if (password !== confirmPassword) {
      return { passwordsNotTheSame: true }
    }
    return null;
  }
}
