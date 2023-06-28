import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnDestroy, OnInit, inject } from '@angular/core';
import { RootState } from '@md/web/utility/store';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'md-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, OnDestroy {
  store = inject(Store<RootState>);
  document = inject(DOCUMENT);

  title = 'Modern Dashboard';

  theme$: Observable<string> = new Observable();
  subscription: Subscription = new Subscription();

  ngOnInit() {
    this.theme$ = this.store.select(store => store.profile.theme);

    this.subscription.add(
      this.theme$.subscribe(theme => {
        this.document.body.setAttribute('data-theme', theme);
      })
    );

    const isDark = isDarkMode();
    const theme = isDark ? 'dark' : 'light';
    this.document.body.setAttribute('data-theme', theme);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}

const isDarkMode = () =>
  globalThis.matchMedia?.('(prefers-color-scheme:dark)').matches ?? false;
