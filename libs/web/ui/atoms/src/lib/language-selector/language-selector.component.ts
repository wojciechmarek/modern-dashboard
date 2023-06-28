import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Language } from '@md/common/enums';

export interface LanguageSelector {
  id: Language;
  name: string;
  flag: string;
}

@Component({
  selector: 'md-language-selector',
  templateUrl: './language-selector.component.html',
  styleUrls: ['./language-selector.component.scss'],
})
export class LanguageSelectorComponent {
  @Input() languages: LanguageSelector[] = [];
  @Input() selectedLanguage: Language = Language.English;
  @Output() languageChange = new EventEmitter<Language>();

  onLanguageClick(language: Language) {
    this.languageChange.emit(language);
  }
}
