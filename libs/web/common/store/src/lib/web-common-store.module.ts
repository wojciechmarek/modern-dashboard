import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';

import { AuthState, authReducer } from './auth';
import { ThemeState, themeReducer } from './theme';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { LanguageState, languageReducer } from './language';

export interface RootState {
  theme: ThemeState;
  language: LanguageState;
  auth: AuthState;
}

@NgModule({
  imports: [
    StoreModule.forRoot<RootState>({
      theme: themeReducer,
      auth: authReducer,
      language: languageReducer,
    }),
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
      logOnly: true, //process.env.PRODUCTION === "true", // Restrict extension to log-only mode
    }),
  ],
})
export class WebCommonStoreModule {}
