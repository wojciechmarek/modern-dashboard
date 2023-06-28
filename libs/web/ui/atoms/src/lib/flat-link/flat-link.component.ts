import { Component, Input } from '@angular/core';

@Component({
  selector: 'md-flat-link',
  templateUrl: './flat-link.component.html',
  styleUrls: ['./flat-link.component.scss'],
})
export class FlatLinkComponent {
  @Input() label = '';
  @Input() link = '';
}
