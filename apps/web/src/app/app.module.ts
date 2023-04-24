import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { WebViewsLayoutModule } from '@md/web/views/layout';
import { RouterModule } from '@angular/router';

import { APOLLO_OPTIONS, ApolloModule } from 'apollo-angular';
import { HttpLink } from 'apollo-angular/http';
import { HttpClientModule } from '@angular/common/http';
import { InMemoryCache } from '@apollo/client/core';
import { WebCommonRoutingModule } from '@md/web/common/routing';
import { WebCommonStoreModule } from '@md/web/common/store';
import { AuthEffects, WebDataAccessAuthModule } from '@md/web/data-access/auth';
import { EffectsModule } from '@ngrx/effects';

@NgModule({
  declarations: [AppComponent],
  imports: [
    RouterModule,
    WebCommonStoreModule,
    WebViewsLayoutModule,
    WebCommonRoutingModule,
    BrowserModule,
    ApolloModule,
    HttpClientModule,
    WebDataAccessAuthModule
  ],
  providers: [
    {
      provide: APOLLO_OPTIONS,
      useFactory(httpLink: HttpLink) {
        return {
          cache: new InMemoryCache(),
          link: httpLink.create({
            uri: 'http://localhost:3333/graphql',
          }),
        };
      },
      deps: [HttpLink],
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
