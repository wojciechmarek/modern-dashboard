import { Component, inject } from '@angular/core';
import { LoginDto } from '@md/common/models';
import { LoginAction, RootState } from '@md/web/common/store';
import { Store } from '@ngrx/store';
import { Apollo, gql } from 'apollo-angular';

@Component({
  selector: 'md-login-view',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  store = inject(Store<RootState>);

  handleLoginSubmit(data: LoginDto) {
    this.store.dispatch(LoginAction.load(data))
  }
}
