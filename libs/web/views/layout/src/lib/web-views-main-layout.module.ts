import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { MainLayoutComponent } from './layout/layout.component'

@NgModule({
  imports: [CommonModule],
  declarations: [MainLayoutComponent],
  exports: [MainLayoutComponent],
})
export class WebViewsMainLayoutModule {}
