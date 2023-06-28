import { Component, Input } from '@angular/core'

@Component({
  selector: 'md-dashboard-tile-header',
  templateUrl: './dashboard-tile-header.component.html',
  styleUrls: ['./dashboard-tile-header.component.scss'],
})
export class DashboardTileHeaderComponent {
  @Input() title = '';
  @Input() isHeaderHighlighted = false;
}
