import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'
import { ButtonComponent } from './button/button.component'
import { TextComponent } from './text/text.component'
import { IconComponent } from './icon/icon.component'
import { DesktopMenuItemComponent } from './desktop-menu-item/desktop-menu-item.component'
import { DesktopMenuButtonComponent } from './desktop-menu-button/desktop-menu-button.component'
import { HeaderComponent } from './header/header.component'
import { ReactiveFormsModule } from '@angular/forms'
import { TextInputComponent } from './text-input/text-input.component'
import { CheckboxComponent } from './checkbox/checkbox.component'

@NgModule({
  imports: [CommonModule, RouterModule, ReactiveFormsModule],
  declarations: [
    ButtonComponent,
    IconComponent,
    DesktopMenuItemComponent,
    DesktopMenuButtonComponent,
    HeaderComponent,
    TextInputComponent,
    TextComponent,
    CheckboxComponent
  ],
  exports: [
    ButtonComponent,
    IconComponent,
    DesktopMenuItemComponent,
    DesktopMenuButtonComponent,
    HeaderComponent,
    TextInputComponent,
    TextComponent,
    CheckboxComponent
  ],
})
export class WebComponentsAtomsModule {}
