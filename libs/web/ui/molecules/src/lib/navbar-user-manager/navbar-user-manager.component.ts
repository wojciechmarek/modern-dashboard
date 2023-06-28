import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'md-navbar-user-manager',
  templateUrl: './navbar-user-manager.component.html',
  styleUrls: ['./navbar-user-manager.component.scss'],
})
export class NavbarUserManagerComponent {
  @Input() themeButtonLabel = '';
  @Input() authButtonLabel = '';

  @Output() handleThemeButtonClick = new EventEmitter();
  @Output() handleAuthButtonClick = new EventEmitter();
  @Output() handleSearchOpenClick = new EventEmitter();

  themeButtonClick() {
    this.handleThemeButtonClick.emit();
  }

  authButtonClick() {
    this.handleAuthButtonClick.emit();
  }

  searchOpenClick() {
    this.handleSearchOpenClick.emit();
  }
}
