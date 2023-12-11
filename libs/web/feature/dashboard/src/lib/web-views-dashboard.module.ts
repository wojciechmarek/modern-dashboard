import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';
import { LucideAngularModule, Calendar } from 'lucide-angular';
import { WebComponentsOrganismsModule } from '@md/web/ui/organisms';
import { TranslateModule } from '@ngx-translate/core';

const routes = [{ path: '', component: HomeComponent }];

@NgModule({
  imports: [
    CommonModule,
    TranslateModule,
    RouterModule.forChild(routes),
    LucideAngularModule.pick({ Calendar }),
    WebComponentsOrganismsModule,
  ],
  declarations: [HomeComponent],
})
export class WebViewsDashboardModule {}
