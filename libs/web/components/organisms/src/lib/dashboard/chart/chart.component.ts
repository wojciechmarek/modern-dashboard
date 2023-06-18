import { Component, Input } from '@angular/core';

@Component({
  selector: 'md-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css'],
})
export class ChartComponent {
  @Input() title = '';
  @Input() imageSrc = '';
  @Input() value = '';
  @Input() description = '';
  @Input() trendText = '';
  @Input() trendColor = '';
}
