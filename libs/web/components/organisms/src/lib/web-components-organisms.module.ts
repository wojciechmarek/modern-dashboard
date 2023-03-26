import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { NavbarComponent } from './navbar/navbar.component'
import { WebComponentsAtomsModule } from '@md/web/components/atoms'
import { WebComponentsMoleculesModule } from '@md/web/components/molecules'

@NgModule({
  imports: [CommonModule, WebComponentsAtomsModule, WebComponentsMoleculesModule],
  declarations: [NavbarComponent],
  exports: [NavbarComponent],
})
export class WebComponentsOrganismsModule {}
