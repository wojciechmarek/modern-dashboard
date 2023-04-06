import { Component, EventEmitter, Output } from '@angular/core'
import { Store } from '@ngrx/store';

@Component({
  selector: 'md-desktop-menu-buttons',
  templateUrl: './desktop-menu-buttons.component.html',
  styleUrls: ['./desktop-menu-buttons.component.scss'],
})
export class DesktopMenuButtonsComponent {
  @Output() handleThemeToggle = new EventEmitter();

  constructor(private readonly store: Store) {    
  }

  themeToggle() {
    this.handleThemeToggle.emit();
  }
}
