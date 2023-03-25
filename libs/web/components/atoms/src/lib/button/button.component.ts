import { Component, EventEmitter, Input, Output } from '@angular/core'

@Component({
  selector: 'md-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent {
  @Input() label = '';

  @Output() handleClick = new EventEmitter();
}
