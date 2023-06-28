import { Component, EventEmitter, Input, Output } from '@angular/core';

export interface HorizontalSelectorItem {
  iconUrl: string;
  id: string;
}

@Component({
  selector: 'md-horizontal-selector',
  templateUrl: './horizontal-selector.component.html',
  styleUrls: ['./horizontal-selector.component.scss'],
})
export class HorizontalSelectorComponent {
  @Input() items: HorizontalSelectorItem[] = [];

  @Input() color: 'success' | 'info' | 'danger' | 'warning' | 'flat' = 'flat';

  @Output() handleClick = new EventEmitter();

  onClick() {
    this.handleClick.emit();
  }
}
