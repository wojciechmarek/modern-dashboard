import { Component, Input } from '@angular/core';

@Component({
  selector: 'md-header-text',
  templateUrl: './header-text.component.html',
  styleUrls: ['./header-text.component.scss'],
})
export class HeaderTextComponent {
  @Input() header = '';
  @Input() subHeaderText = '';
}
