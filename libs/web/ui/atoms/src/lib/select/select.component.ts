import { Component, Input, signal } from '@angular/core';

export interface SelectItem {
  id: string;
  name: string;
}

@Component({
  selector: 'md-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss'],
})
export class SelectComponent {
  @Input() items: SelectItem[] = [];

  placeholder = signal('');

  onSelectChange(event: Event) {
    const target = event.target as HTMLSelectElement;
    const optionName = target.options[target.selectedIndex].text;
    this.placeholder.set(optionName);
  }
}
