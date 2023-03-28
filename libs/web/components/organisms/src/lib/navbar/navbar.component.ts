import { DOCUMENT } from '@angular/common'
import { Component, Inject } from '@angular/core'

@Component({
  selector: 'md-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  links = [
    { path: '/', icon: 'home', title: 'Home' },
    { path: '/drive', icon: 'drive', title: 'Drive' },
    { path: '/user-profile', icon: 'profile', title: 'Profile' },
  ]

  constructor(@Inject(DOCUMENT) private document: Document) {}

  isDark = false

  themeToggle() {
    if (this.isDark) {
      this.document.body.setAttribute('theme', 'light')
    } else {
      this.document.body.setAttribute('theme', 'dark')
    }

    this.isDark = !this.isDark
  }

}
