import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { ButtonComponent } from './button/button.component'
import { TextComponent } from './text/text.component'
import { IconComponent } from './icon/icon.component'

@NgModule({
  imports: [CommonModule],
  declarations: [ButtonComponent, TextComponent, IconComponent],
  exports: [ButtonComponent, TextComponent, IconComponent],
})
export class WebComponentsAtomsModule {}
