import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { NavbarComponent } from './navbar/navbar.component'
import { WebComponentsAtomsModule } from '@md/web/components/atoms'
import { WebComponentsMoleculesModule } from '@md/web/components/molecules'
import { RouterModule } from '@angular/router'

@NgModule({
  imports: [
    CommonModule,
    WebComponentsAtomsModule,
    WebComponentsMoleculesModule,
    RouterModule,
  ],
  declarations: [NavbarComponent],
  exports: [NavbarComponent],
})
export class WebComponentsOrganismsModule {}
