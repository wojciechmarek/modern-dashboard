import { DOCUMENT } from '@angular/common'
import { Component, Inject, OnDestroy, OnInit } from '@angular/core'
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'md-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'web';
  
  theme$: Observable<string>;
  subscription: Subscription = new Subscription();

  constructor(
    private readonly store: Store<{ theme: string }>,
    @Inject(DOCUMENT) private document: Document
  ) {
    this.theme$ = this.store.select((store) => store.theme);
  }

  ngOnInit() {
    this.subscription.add(
      this.theme$.subscribe((themeObject) => {
        const isDark = JSON.stringify(themeObject).includes('dark');
        if (isDark) {
          this.document.body.setAttribute('data-theme', 'dark');
        } else {
          this.document.body.setAttribute('data-theme', 'light');
        }
      })
    );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
