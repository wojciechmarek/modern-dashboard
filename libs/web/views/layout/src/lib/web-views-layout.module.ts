import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { LayoutComponent } from './layout/layout.component'
import { WebComponentsOrganismsModule } from '@modern-dashboard/web/components/organisms'

@NgModule({
  imports: [CommonModule, WebComponentsOrganismsModule],
  declarations: [LayoutComponent],
  exports: [LayoutComponent],
})
export class WebViewsLayoutModule {}
