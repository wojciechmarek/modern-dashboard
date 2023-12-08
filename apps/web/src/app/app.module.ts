import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { WebViewsLayoutModule } from '@md/web/feature/layout';
import { RouterModule } from '@angular/router';

import { APOLLO_OPTIONS, ApolloModule } from 'apollo-angular';
import { HttpLink } from 'apollo-angular/http';
import { HttpClientModule } from '@angular/common/http';
import { InMemoryCache } from '@apollo/client/core';
import { WebCommonRoutingModule } from '@md/web/common/routing';
import { WebCommonStoreModule } from '@md/web/common/store';
import { WebDataAccessAuthModule } from '@md/web/data-access/auth';
import { ServiceWorkerModule } from '@angular/service-worker';
import { WebCommonTranslationsModule } from '@md/web/common/translations';

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
    WebDataAccessAuthModule,
    WebCommonTranslationsModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: !isDevMode(),
      // Register the ServiceWorker as soon as the application is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000',
    }),
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
