import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'md-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: CheckboxComponent,
    },
  ],
})
export class CheckboxComponent
  implements ControlValueAccessor, OnInit, OnChanges
{
  @Input() label = '';
  @Input() value = false;
  @Input() name = '';

  _value = false;
  _isTouched = false;
  _isDisabled = false;

  ngOnInit(): void {
    this._value = this.value;
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['value']) {
      this._value = changes['value'].currentValue;
    }
  }

  onCheckboxChange = (event: Event) => {
    const checked = (event.target as HTMLInputElement).checked;
    this._value = checked;
    this.onChange(this._value);
  };

  onChange = (value: boolean) => {
    return;
  };
  onTouched = () => {
    return;
  };

  writeValue(value: boolean): void {
    this._value = value;
  }

  registerOnChange(onChange: any): void {
    this.onChange = onChange;
  }

  registerOnTouched(onTouched: any): void {
    this.onTouched = onTouched;
  }

  setDisabledState?(isDisabled: boolean): void {
    this._isDisabled = isDisabled;
  }
}
