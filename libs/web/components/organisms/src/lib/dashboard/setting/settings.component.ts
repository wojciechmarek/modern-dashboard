import { Component, inject } from '@angular/core';
import { Language, Theme } from '@md/common/enums';
import { languages, themes } from '@md/web/common/constants';
import { LanguageAction, RootState, ThemeAction } from '@md/web/common/store';
import { Store } from '@ngrx/store';

@Component({
  selector: 'md-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css'],
})
export class SettingsComponent {
  store = inject(Store<RootState>);

  themes = themes as any;
  languages = languages as any;

  onThemeChange(theme: Theme) {  
    this.store.dispatch(ThemeAction({ theme }));
  }

  onLanguageChange(language: Language) {  
    this.store.dispatch(LanguageAction({ language }));
  }



}

