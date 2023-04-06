import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';

import { themeReducer } from './reducers';

@NgModule({
  imports: [
    StoreModule.forRoot({ theme: themeReducer }),
  ],
})
export class WebCommonStoreModule {}
