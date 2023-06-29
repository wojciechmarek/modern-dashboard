import { Component, inject } from '@angular/core';
import { RegisterDto } from '@md/common/models';
import { RegisterAction, RootState } from '@md/web/common/store';
import { Store } from '@ngrx/store';

@Component({
  selector: 'md-register-view',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent {
  store = inject(Store<RootState>);

  handleRegisterSubmit(data: RegisterDto) {
    this.store.dispatch(RegisterAction.load(data));
  }
}
