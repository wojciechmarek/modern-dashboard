import { Component, Input } from '@angular/core';

@Component({
  selector: 'md-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss'],
})
export class IconComponent {
  @Input() src = '';
  @Input() alt = '';
}
