import { Injectable, inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, concatMap } from 'rxjs/operators';
import { Observable, EMPTY, of } from 'rxjs';
import {
  LoginActions,
  LogoutActions,
  RegisterActions,
} from '@md/web/common/store';
import { Apollo, gql } from 'apollo-angular';
import { LoginDto, TokenDto } from '@md/common/models';

@Injectable()
export class AuthService {
  apollo = inject(Apollo);

  loginSubmit(data: LoginDto) {
    return this.apollo.mutate<TokenDto>({
      mutation: gql`
        mutation Login($data: LoginInput!) {
          login(data: $data) {
            accessToken
            refreshToken
          }
        }
      `,
      variables: {
        data,
      },
    }).pipe(
      map((result) => {
        if (!result.data) {
          throw new Error('No data');
        }
        return result.data;
      }
    ));
  }
}
