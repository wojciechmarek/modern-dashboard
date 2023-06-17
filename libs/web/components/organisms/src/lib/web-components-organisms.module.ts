import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { WebComponentsAtomsModule } from '@md/web/components/atoms';
import { WebComponentsMoleculesModule } from '@md/web/components/molecules';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { LucideAngularModule, Menu, GripHorizontal } from 'lucide-angular';
import { AuthOrganisms } from './auth';
import { DashboardOrganisms } from './dashboard';

@NgModule({
  imports: [
    CommonModule,
    WebComponentsAtomsModule,
    WebComponentsMoleculesModule,
    RouterModule,
    ReactiveFormsModule,
    LucideAngularModule.pick({ Menu, GripHorizontal }),
  ],
  declarations: [NavbarComponent, ...AuthOrganisms, ...DashboardOrganisms],
  exports: [
    NavbarComponent,
    ...AuthOrganisms,
    ...DashboardOrganisms
  ],
})
export class WebComponentsOrganismsModule {}
