import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { WebComponentsAtomsModule } from '@md/web/ui/atoms';
import { WebComponentsMoleculesModule } from '@md/web/ui/molecules';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import {
  LucideAngularModule,
  Menu,
  GripHorizontal,
  Search,
  Check,
} from 'lucide-angular';
import { AuthOrganisms } from './auth';
import { DashboardOrganisms } from './dashboard';
import { SearchComponent } from './search/search.component';
import { NotFoundComponent } from './not-found/not-found.component';

@NgModule({
  imports: [
    CommonModule,
    WebComponentsAtomsModule,
    WebComponentsMoleculesModule,
    RouterModule,
    ReactiveFormsModule,
    LucideAngularModule.pick({ Menu, GripHorizontal, Search, Check }),
  ],
  declarations: [
    NavbarComponent,
    SearchComponent,
    NotFoundComponent,
    ...AuthOrganisms,
    ...DashboardOrganisms,
  ],
  exports: [
    NavbarComponent,
    SearchComponent,
    NotFoundComponent,
    ...AuthOrganisms,
    ...DashboardOrganisms,
  ],
})
export class WebComponentsOrganismsModule {}
