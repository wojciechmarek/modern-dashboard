import { Component, EventEmitter, Input, Output } from '@angular/core'

@Component({
  selector: 'md-desktop-menu-buttons',
  templateUrl: './desktop-menu-buttons.component.html',
  styleUrls: ['./desktop-menu-buttons.component.scss'],
})
export class DesktopMenuButtonsComponent {
  @Input() themeButtonLabel = "";
  @Input() authButtonLabel = "";

  @Output() handleThemeButtonClick = new EventEmitter();
  @Output() handleAuthButtonClick = new EventEmitter();

  themeButtonClick() {
    this.handleThemeButtonClick.emit();
  }

  authButtonClick() {
    this.handleAuthButtonClick.emit();
  }
}
