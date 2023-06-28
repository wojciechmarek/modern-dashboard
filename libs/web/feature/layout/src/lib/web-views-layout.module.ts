import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout/layout.component';
import { WebComponentsOrganismsModule } from '@md/web/ui/organisms';
import { WebComponentsAtomsModule } from '@md/web/ui/atoms';

@NgModule({
  imports: [
    CommonModule,
    WebComponentsOrganismsModule,
    WebComponentsAtomsModule,
  ],
  declarations: [LayoutComponent],
  exports: [LayoutComponent],
})
export class WebViewsLayoutModule {}
