import { Component, inject } from '@angular/core';
import { ResetPasswordDto } from '@md/common/models';
import { ResetPasswordAction, RootState } from '@md/web/utility/store';
import { Store } from '@ngrx/store';

@Component({
  selector: 'md-reset-password-view',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss'],
})
export class ResetPasswordComponent {
  store = inject(Store<RootState>);

  handleResetPasswordSubmit(data: ResetPasswordDto) {
    this.store.dispatch(ResetPasswordAction.load(data));
  }
}
