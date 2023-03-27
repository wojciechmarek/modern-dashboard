import { DOCUMENT } from '@angular/common'
import { Component, Inject } from '@angular/core'

@Component({
  selector: 'md-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'web'

  constructor(@Inject(DOCUMENT) private document: Document) {}

  isDark = false

  themeToggle() {
    if (this.isDark) {
      document.body.setAttribute('theme', 'light')
    } else {
      document.body.setAttribute('theme', 'dark')
    }

    this.isDark = !this.isDark
  }
}
