import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'
import { ButtonComponent } from './button/button.component'
import { TextComponent } from './text/text.component'
import { IconComponent } from './icon/icon.component'
import { DesktopMenuItemComponent } from './desktop-menu-item/desktop-menu-item.component'
import { HeaderComponent } from './header/header.component'
import { ReactiveFormsModule } from '@angular/forms'
import { TextInputComponent } from './text-input/text-input.component'
import { CheckboxComponent } from './checkbox/checkbox.component'
import { LinkComponent } from './link/link.component'
import { HorizontalLineComponent } from './horizontal-line/horizontal-line.component'
import { HorizontalSelectorComponent } from './horizontal-selector/horizontal-selector.component'

const Components = [
  ButtonComponent,
  IconComponent,
  DesktopMenuItemComponent,
  HeaderComponent,
  TextInputComponent,
  TextComponent,
  CheckboxComponent,
  LinkComponent,
  HorizontalLineComponent,
  HorizontalSelectorComponent
];

@NgModule({
  imports: [CommonModule, RouterModule, ReactiveFormsModule],
  declarations: [...Components],
  exports: [...Components],
})
export class WebComponentsAtomsModule {}
