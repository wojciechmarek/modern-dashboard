import { Component, Input } from '@angular/core'

@Component({
  selector: 'md-horizontal-line',
  templateUrl: './horizontal-line.component.html',
  styleUrls: ['./horizontal-line.component.scss'],
})
export class HorizontalLineComponent {
  @Input() text = ''
}
