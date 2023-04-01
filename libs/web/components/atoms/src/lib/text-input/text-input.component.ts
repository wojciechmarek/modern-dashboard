import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core'
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'md-text-input',
  templateUrl: './text-input.component.html',
  styleUrls: ['./text-input.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: TextInputComponent
    }
  ]
})
export class TextInputComponent implements ControlValueAccessor, OnInit, OnChanges {
  @Input() label = '';
  @Input() placeholder = '';
  @Input() type: 'text' | 'password' = 'text';
  @Input() value = '';
  @Input() formControlName = '';
  @Input() name = '';

  _value = '';
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

  onInputChange = (value: Event) => {
    this._value = (value.target as HTMLInputElement).value;
    this.onChange(this._value);
  }

  onChange = (value: any) => { return; }
  onTouched = () => { return; }

  writeValue(value: string): void {
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
