import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';
import { WebComponentsOrganismsModule } from '@md/web/ui/organisms';

const routes = [{ path: '', component: HomeComponent }];

@NgModule({
  declarations: [HomeComponent],
  imports: [CommonModule, RouterModule.forChild(routes), WebComponentsOrganismsModule],
})
export class WebFeatureNotFoundModule {}
