import { Injectable, inject } from '@angular/core';

import { Apollo } from 'apollo-angular';
import {
  EmailAvailableDto,
  LoginDto,
  RegisterDto,
  ResetPasswordDto,
  TokenDto,
} from '@md/common/models';
import {
  CHECK_EMAIL_AVAILABLE,
  LOGIN,
  // LOGOUT,
  REGISTER,
  RESET_PASSWORD,
} from './graphql.objects';

@Injectable()
export class AuthService {
  apollo = inject(Apollo);

  login(data: LoginDto) {
    return this.apollo.query<TokenDto>({
      query: LOGIN,
      variables: {
        data,
      },
    });
  }

  register(data: RegisterDto) {
    return this.apollo.mutate({
      mutation: REGISTER,
      variables: {
        data,
      },
    });
  }

  // logout() {
  //   return this.apollo.query({
  //     query: LOGOUT,
  //   });
  // }

  resetPassword(data: ResetPasswordDto) {
    return this.apollo.query({
      query: RESET_PASSWORD,
      variables: {
        data,
      },
    });
  }

  checkEmailAvailable(data: EmailAvailableDto) {
    return this.apollo.query<boolean>({
      query: CHECK_EMAIL_AVAILABLE,
      variables: {
        data,
      },
    });
  }
}
