import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';

import { AuthState, authReducer } from './auth';
import { ThemeState, themeReducer } from './theme';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

export interface RootState {
  theme: ThemeState,
  auth: AuthState
}

@NgModule({
  imports: [
    StoreModule.forRoot<RootState>({ theme: themeReducer, auth: authReducer }),
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
      logOnly: true, //process.env.PRODUCTION === "true", // Restrict extension to log-only mode
    }),
  ],
})
export class WebCommonStoreModule {}
