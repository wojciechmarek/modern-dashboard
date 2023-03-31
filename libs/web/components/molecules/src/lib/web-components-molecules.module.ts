import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { BrandLogoComponent } from './brand-logo/brand-logo.component'
import { WebComponentsAtomsModule } from '@md/web/components/atoms'
import { DesktopMenuLinksComponent } from './desktop-menu-links/desktop-menu-links.component'
import { DesktopMenuButtonsComponent } from './desktop-menu-buttons/desktop-menu-buttons.component'
import { HeaderTextComponent } from './header-text/header-text.component'
import { LabelInputComponent } from './label-input/label-input.component'

@NgModule({
  imports: [CommonModule, WebComponentsAtomsModule],
  declarations: [
    BrandLogoComponent,
    DesktopMenuLinksComponent,
    DesktopMenuButtonsComponent,
    HeaderTextComponent,
    LabelInputComponent,
  ],
  exports: [
    BrandLogoComponent,
    DesktopMenuLinksComponent,
    DesktopMenuButtonsComponent,
    HeaderTextComponent,
    LabelInputComponent,
  ],
})
export class WebComponentsMoleculesModule {}
