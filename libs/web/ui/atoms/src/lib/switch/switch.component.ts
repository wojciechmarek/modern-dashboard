import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
  SimpleChanges,
  signal,
} from '@angular/core';

@Component({
  selector: 'md-switch',
  templateUrl: './switch.component.html',
  styleUrls: ['./switch.component.scss'],
})
export class SwitchComponent implements OnChanges {
  @Input() isDisabled = false;
  @Input() isOn = false;

  @Output() isOnChanged = new EventEmitter<boolean>();

  isToggleOn = signal<boolean>(this.isOn);

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['isOn']) {
      this.isToggleOn.set(changes['isOn'].currentValue);
    }
  }

  onSwitchChange(event: Event) {
    const isOn = (event.target as HTMLInputElement).checked;
    this.isOnChanged.emit(isOn);
    this.isToggleOn.set(isOn);
  }
}
