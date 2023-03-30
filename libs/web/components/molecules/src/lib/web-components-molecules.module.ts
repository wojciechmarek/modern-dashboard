import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { BrandLogoComponent } from './brand-logo/brand-logo.component'
import { WebComponentsAtomsModule } from '@md/web/components/atoms'
import { DesktopMenuLinksComponent } from './desktop-menu-links/desktop-menu-links.component'
import { DesktopMenuButtonsComponent } from './desktop-menu-buttons/desktop-menu-buttons.component'

@NgModule({
  imports: [CommonModule, WebComponentsAtomsModule],
  declarations: [
    BrandLogoComponent,
    DesktopMenuLinksComponent,
    DesktopMenuButtonsComponent,
  ],
  exports: [
    BrandLogoComponent,
    DesktopMenuLinksComponent,
    DesktopMenuButtonsComponent,
  ],
})
export class WebComponentsMoleculesModule {}
