import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';
import { WebComponentsAtomsModule } from '@md/web/components/atoms';

const routes = [{ path: '', component: HomeComponent }];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    WebComponentsAtomsModule,
  ],
  declarations: [HomeComponent],
})
export class WebViewsSettingsModule {}
