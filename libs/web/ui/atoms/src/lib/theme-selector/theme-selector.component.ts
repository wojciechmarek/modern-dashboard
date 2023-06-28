import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Theme } from '@md/common/enums';

export interface ThemeSelector {
  id: Theme;
  name: string;
  style: string;
}

@Component({
  selector: 'md-theme-selector',
  templateUrl: './theme-selector.component.html',
  styleUrls: ['./theme-selector.component.scss'],
})
export class ThemeSelectorComponent {
  @Input() themes: ThemeSelector[] = [];
  @Input() selectedTheme: Theme = Theme.System;
  @Output() themeChange = new EventEmitter<Theme>();

  onThemeClick(theme: Theme) {
    this.themeChange.emit(theme);
  }
}
