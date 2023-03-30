import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { BrandLogoComponent } from './brand-logo/brand-logo.component'
import { WebComponentsAtomsModule } from '@md/web/components/atoms'
import { DesktopMenuComponent } from './desktop-menu/desktop-menu.component'

@NgModule({
  imports: [CommonModule, WebComponentsAtomsModule],
  declarations: [BrandLogoComponent, DesktopMenuComponent],
  exports: [BrandLogoComponent, DesktopMenuComponent],
})
export class WebComponentsMoleculesModule {}
