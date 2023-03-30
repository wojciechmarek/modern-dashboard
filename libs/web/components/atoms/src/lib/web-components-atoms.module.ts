import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { ButtonComponent } from './button/button.component'
import { TextComponent } from './text/text.component'
import { IconComponent } from './icon/icon.component'
import { DesktopMenuItemComponent } from './desktop-menu-item/desktop-menu-item.component'
import { RouterModule } from '@angular/router'

@NgModule({
  imports: [CommonModule, RouterModule],
  declarations: [
    ButtonComponent,
    TextComponent,
    IconComponent,
    DesktopMenuItemComponent,
  ],
  exports: [
    ButtonComponent,
    TextComponent,
    IconComponent,
    DesktopMenuItemComponent,
  ],
})
export class WebComponentsAtomsModule {}
