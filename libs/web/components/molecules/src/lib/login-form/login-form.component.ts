import { Component } from '@angular/core'
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'md-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss'],
})
export class LoginFormComponent {
  constructor(private readonly fb: FormBuilder) { }
  
  form = this.fb.group({
    email: this.fb.control('dupa'),
    password: this.fb.control(''),
    isRememberMeChecked: this.fb.control(false),
  });

  onSubmit() {
    console.log(this.form.value);
  }
}
