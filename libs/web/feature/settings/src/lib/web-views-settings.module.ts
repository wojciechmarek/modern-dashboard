import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';
import { WebComponentsAtomsModule } from '@md/web/ui/atoms';
import { LucideAngularModule, Edit3 } from 'lucide-angular';

const routes = [{ path: '', component: HomeComponent }];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    WebComponentsAtomsModule,
    LucideAngularModule.pick({ Edit3 }),
  ],
  declarations: [HomeComponent],
})
export class WebViewsSettingsModule {}
