import { Component, EventEmitter, Input, Output } from '@angular/core'

@Component({
  selector: 'md-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent {
  @Input() label = '';

  @Input() type: 'button' | 'submit' | 'reset' = 'button';

  @Input() color: 'success' | 'info' | 'danger' | 'warning' | 'flat' | 'transparent' | "opacity" = 'flat';

  @Input() isDisabled = false;

  @Input() isTextLeftAligned = false;

  @Output() handleClick = new EventEmitter();

  onClick() {
    this.handleClick.emit();
  }
}
