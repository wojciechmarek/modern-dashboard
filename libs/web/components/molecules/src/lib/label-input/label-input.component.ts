import { Component, Input } from '@angular/core'

@Component({
  selector: 'md-label-input',
  templateUrl: './label-input.component.html',
  styleUrls: ['./label-input.component.scss'],
})
export class LabelInputComponent {
  @Input() label = '';
  @Input() placeholder = '';
  @Input() type = 'text';
  @Input() value = '';
  @Input() formControlName = '';
  @Input() name = '';
}
