import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';

import { AuthState, authReducer } from './auth';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { ProfileState, profileReducer } from './profile';

export interface RootState {
  profile: ProfileState;
  auth: AuthState;
}

@NgModule({
  imports: [
    StoreModule.forRoot<RootState>({
      profile: profileReducer,
      auth: authReducer,
    }),
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
      logOnly: true, //process.env.PRODUCTION === "true", // Restrict extension to log-only mode
    }),
  ],
})
export class WebCommonStoreModule {}
