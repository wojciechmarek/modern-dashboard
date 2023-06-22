import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'
import { ButtonComponent } from './button/button.component'
import { TextComponent } from './text/text.component'
import { IconComponent } from './icon/icon.component'
import { HeaderComponent } from './header/header.component'
import { ReactiveFormsModule } from '@angular/forms'
import { TextInputComponent } from './text-input/text-input.component'
import { CheckboxComponent } from './checkbox/checkbox.component'
import { LinkComponent } from './link/link.component'
import { HorizontalLineComponent } from './horizontal-line/horizontal-line.component'
import { HorizontalSelectorComponent } from './horizontal-selector/horizontal-selector.component'
import { TitleComponent } from './title/title.component'
import { ThemeSelectorComponent } from './theme-selector/theme-selector.component'
import { FlatLinkComponent } from './flat-link/flat-link.component'
import { LanguageSelectorComponent } from './language-selector/language-selector.component'
import { LucideAngularModule, ChevronDown } from 'lucide-angular'
import { SelectComponent } from './select/select.component'
import { SwitchComponent } from './switch/switch.component'

const Components = [
  ButtonComponent,
  IconComponent,
  HeaderComponent,
  TextInputComponent,
  TextComponent,
  CheckboxComponent,
  LinkComponent,
  HorizontalLineComponent,
  HorizontalSelectorComponent,
  TitleComponent,
  ThemeSelectorComponent,
  FlatLinkComponent,
  LanguageSelectorComponent,
  SelectComponent,
  SwitchComponent
];

@NgModule({
  imports: [CommonModule, RouterModule, ReactiveFormsModule, LucideAngularModule.pick({ ChevronDown })],
  declarations: [...Components],
  exports: [...Components],
})
export class WebComponentsAtomsModule {}
