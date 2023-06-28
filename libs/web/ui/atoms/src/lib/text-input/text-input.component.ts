import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import {
  AbstractControl,
  ControlValueAccessor,
  NG_VALIDATORS,
  NG_VALUE_ACCESSOR,
  ValidationErrors,
  Validator,
} from '@angular/forms';

@Component({
  selector: 'md-text-input',
  templateUrl: './text-input.component.html',
  styleUrls: ['./text-input.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: TextInputComponent,
    },
    {
      provide: NG_VALIDATORS,
      multi: true,
      useExisting: TextInputComponent,
    },
  ],
})
export class TextInputComponent
  implements ControlValueAccessor, OnInit, OnChanges, Validator
{
  @Input() label = '';
  @Input() placeholder = '';
  @Input() type: 'text' | 'password' = 'text';
  @Input() value = '';
  @Input() name = '';
  @Input() errorMessage = '';

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

  onKeyUp = (value: Event) => {
    this._value = (value.target as HTMLInputElement).value;
    this.onChange(this._value);
    this.markAsTouched();
  };

  onChange = (value: string) => {
    return;
  };
  onTouched = () => {
    return;
  };

  markAsTouched() {
    if (!this._isTouched) {
      this._isTouched = true;
      this.onTouched();
    }
  }

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

  validate(control: AbstractControl): ValidationErrors | null {
    if (this._isTouched) {
      return control.errors;
    }
    return null;
  }
}
