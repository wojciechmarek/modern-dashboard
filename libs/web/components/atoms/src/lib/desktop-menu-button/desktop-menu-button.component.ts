import { Component, EventEmitter, Input, Output } from '@angular/core'

@Component({
  selector: 'md-desktop-menu-button',
  templateUrl: './desktop-menu-button.component.html',
  styleUrls: ['./desktop-menu-button.component.scss'],
})
export class DesktopMenuButtonComponent {
  @Input() label = '';

  @Output() handleClick = new EventEmitter();

  onClick() {
    this.handleClick.emit();
  }
}
