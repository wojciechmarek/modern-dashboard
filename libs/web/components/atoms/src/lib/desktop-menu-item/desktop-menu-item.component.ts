import { Component, Input } from '@angular/core'

@Component({
  selector: 'md-desktop-menu-item',
  templateUrl: './desktop-menu-item.component.html',
  styleUrls: ['./desktop-menu-item.component.scss'],
})
export class DesktopMenuItemComponent {
  @Input() path = '';
  @Input() title = '';
}
