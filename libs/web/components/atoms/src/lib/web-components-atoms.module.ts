import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'
import { ButtonComponent } from './button/button.component'
import { TextComponent } from './text/text.component'
import { IconComponent } from './icon/icon.component'
import { DesktopMenuItemComponent } from './desktop-menu-item/desktop-menu-item.component'
import { DesktopMenuButtonComponent } from './desktop-menu-button/desktop-menu-button.component'
import { HeaderComponent } from './header/header.component'
import { InputComponent } from './input/input.component'
import { ReactiveFormsModule } from '@angular/forms'

@NgModule({
  imports: [CommonModule, RouterModule, ReactiveFormsModule],
  declarations: [
    ButtonComponent,
    TextComponent,
    IconComponent,
    DesktopMenuItemComponent,
    DesktopMenuButtonComponent,
    HeaderComponent,
    InputComponent,
  ],
  exports: [
    ButtonComponent,
    TextComponent,
    IconComponent,
    DesktopMenuItemComponent,
    DesktopMenuButtonComponent,
    HeaderComponent,
    InputComponent,
  ],
})
export class WebComponentsAtomsModule {}
