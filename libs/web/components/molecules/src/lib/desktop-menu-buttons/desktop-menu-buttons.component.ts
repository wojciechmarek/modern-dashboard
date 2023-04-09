import { Component, EventEmitter, Output } from '@angular/core'

@Component({
  selector: 'md-desktop-menu-buttons',
  templateUrl: './desktop-menu-buttons.component.html',
  styleUrls: ['./desktop-menu-buttons.component.scss'],
})
export class DesktopMenuButtonsComponent {
  @Output() handleThemeToggle = new EventEmitter();

  themeToggle() {
    this.handleThemeToggle.emit();
  }
}
