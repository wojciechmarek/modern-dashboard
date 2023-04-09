import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';

import { authReducer } from './auth';
import { themeReducer } from './theme';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';


@NgModule({
  imports: [
    StoreModule.forRoot({ theme: themeReducer, auth: authReducer }),
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
      logOnly: true, //process.env.PRODUCTION === "true", // Restrict extension to log-only mode
    }),
  ],
})
export class WebCommonStoreModule {}
