import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { WebViewsLayoutModule } from '@md/web/views/layout';
import { RootLevelRoutingModule } from './app.routes';
import { RouterModule } from '@angular/router';

import { APOLLO_OPTIONS, ApolloModule } from 'apollo-angular';
import { HttpLink } from 'apollo-angular/http';
import { HttpClientModule } from '@angular/common/http';
import { InMemoryCache } from '@apollo/client/core';

@NgModule({
  declarations: [AppComponent],
  imports: [
    RouterModule,
    RootLevelRoutingModule,
    WebViewsLayoutModule,
    BrowserModule, ApolloModule, HttpClientModule
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
