import { Component } from '@angular/core'

@Component({
  selector: 'md-desktop-menu-links',
  templateUrl: './desktop-menu-links.component.html',
  styleUrls: ['./desktop-menu-links.component.scss'],
})
export class DesktopMenuLinksComponent {
  links = [
    { path: '/', icon: 'home', title: 'Home' },
    { path: '/drive', icon: 'drive', title: 'Drive' },
    { path: '/profile', icon: 'profile', title: 'Profile' },
  ]
}
