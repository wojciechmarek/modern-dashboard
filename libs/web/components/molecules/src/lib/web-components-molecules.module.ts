import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { BrandLogoComponent } from './brand-logo/brand-logo.component'
import { WebComponentsAtomsModule } from '@md/web/components/atoms'

@NgModule({
  imports: [CommonModule, WebComponentsAtomsModule],
  declarations: [BrandLogoComponent],
  exports: [BrandLogoComponent],
})
export class WebComponentsMoleculesModule {}
