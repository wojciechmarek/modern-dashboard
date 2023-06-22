import { Component, EventEmitter, Input, Output, signal } from '@angular/core'

@Component({
  selector: 'md-switch',
  templateUrl: './switch.component.html',
  styleUrls: ['./switch.component.scss'],
})
export class SwitchComponent {
  @Input() isDisabled = false;
  @Input() isOn = false;

  @Output() isOnChanged = new EventEmitter<boolean>(); 
  
  isToggleOn = signal<boolean>(this.isOn);

  onSwitchChange(event: Event) {
    const isOn = (event.target as HTMLInputElement).checked;
    this.isOnChanged.emit(isOn);
    this.isToggleOn.set(isOn);
  }
}
