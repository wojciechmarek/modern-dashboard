import { DOCUMENT } from '@angular/common';
import { Component, OnDestroy, OnInit, inject } from '@angular/core';
import { Language } from '@md/common/enums';
import { RootState } from '@md/web/common/store';
import { Store } from '@ngrx/store';
import { TranslateService } from '@ngx-translate/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'md-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, OnDestroy {
  store = inject(Store<RootState>);
  document = inject(DOCUMENT);
  translate = inject(TranslateService);

  title = 'Modern Dashboard';

  subscription: Subscription = new Subscription();

  ngOnInit() {
    this.initTheme();
    this.initTranslate();
  }

  initTheme() {
    const theme$ = this.store.select(store => store.profile.theme);

    this.subscription.add(
      theme$.subscribe(theme => {
        this.document.body.setAttribute('data-theme', theme);
      })
    );

    const isDark = isDarkMode();
    const theme = isDark ? 'dark' : 'light';
    this.document.body.setAttribute('data-theme', theme);
  }

  initTranslate() {
    this.translate.addLangs(['en', 'nl']);
    this.translate.setDefaultLang('en');

    const language$ = this.store.select<Language>(
      store => store.profile.language
    );

    this.subscription.add(
      language$.subscribe(language => {
        switch (language) {
          case Language.English:
            this.translate.use('en');
            break;
          case Language.Polish:
            this.translate.use('pl');
            break;
          case Language.French:
            this.translate.use('fr');
            break;
          case Language.German:
            this.translate.use('de');
            break;
          case Language.Spanish:
            this.translate.use('es');
            break;
        }
      })
    );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}

const isDarkMode = () =>
  globalThis.matchMedia?.('(prefers-color-scheme:dark)').matches ?? false;
