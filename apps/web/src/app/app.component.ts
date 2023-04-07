import { DOCUMENT } from '@angular/common'
import { Component, Inject, OnDestroy, OnInit, inject } from '@angular/core'
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'md-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, OnDestroy {
  store = inject(Store<{ theme: string }>);
  document = inject(DOCUMENT);

  title = 'web';
  
  theme$: Observable<string> = new Observable();
  subscription: Subscription = new Subscription();

  ngOnInit() {
    this.theme$ = this.store.select((store) => store.theme);

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
