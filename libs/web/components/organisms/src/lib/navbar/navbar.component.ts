import { DOCUMENT } from '@angular/common'
import { Component, Inject } from '@angular/core'

@Component({
  selector: 'md-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  constructor(@Inject(DOCUMENT) private document: Document) {}

  isDark = false

  handleThemeToggle() {
    if (this.isDark) {
      this.document.body.setAttribute('data-theme', 'light')
    } else {
      this.document.body.setAttribute('data-theme', 'dark')
    }

    this.isDark = !this.isDark
  }

}
