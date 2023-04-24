import { Injectable, inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, concatMap } from 'rxjs/operators';
import { Observable, EMPTY, of } from 'rxjs';
import {
  LoginAction,
  LogoutAction,
  RegisterAction,
} from '@md/web/common/store';
import { AuthService } from '../service/auth.service';
import { LoginDto } from '@md/common/models';

@Injectable()
export class AuthEffects {
  actions$ = inject(Actions);
  authService = inject(AuthService);

  loadLogins$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(LoginAction.load),
      concatMap(({email, isRememberMeChecked, password}: LoginDto) =>
        this.authService.loginSubmit({email, password, isRememberMeChecked}).pipe(
          map((data) => LoginAction.success(data)),
          catchError((error) => of(LoginAction.failure({ error })))
        )
      )
    );
  });

  loadRegister$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(RegisterAction.load),
      concatMap(() =>
        /** An EMPTY observable only emits completion. Replace with your own observable API request */
        EMPTY.pipe(
          //map(data => RegisterActions.success({ data })),
          catchError((error) => of(RegisterAction.failure({ error })))
        )
      )
    );
  });

  loadLogout$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(LogoutAction.load),
      concatMap(() =>
        /** An EMPTY observable only emits completion. Replace with your own observable API request */
        EMPTY.pipe(
          map(() => LogoutAction.success()),
          catchError((error) => of(LogoutAction.failure({ error })))
        )
      )
    );
  });
}
