import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { LayoutComponent } from './layout/layout.component'
import { WebComponentsOrganismsModule } from '@modern-dashboard/web/components/organisms'
import { WebComponentsAtomsModule } from '@modern-dashboard/web/components/atoms'

@NgModule({
  imports: [CommonModule, WebComponentsOrganismsModule, WebComponentsAtomsModule],
  declarations: [LayoutComponent],
  exports: [LayoutComponent],
})
export class WebViewsLayoutModule {}
