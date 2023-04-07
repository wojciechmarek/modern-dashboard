import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';

import { authReducer } from './auth';
import { themeReducer } from './theme';


@NgModule({
  imports: [
    StoreModule.forRoot({ theme: themeReducer, auth: authReducer }),
  ],
})
export class WebCommonStoreModule {}
