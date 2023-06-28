import { Component, Input } from '@angular/core'

@Component({
  selector: 'md-text',
  templateUrl: './text.component.html',
  styleUrls: ['./text.component.scss'],
})
export class TextComponent {
  @Input() text = '';
}
