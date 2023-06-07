import { Component } from '@angular/core'

@Component({
  selector: 'md-navbar-menu-links',
  templateUrl: './navbar-menu-links.component.html',
  styleUrls: ['./navbar-menu-links.component.scss'],
})
export class NavbarMenuLinksComponent {
  links = [
    { path: '/', icon: 'home', title: 'Home' },
    { path: '/drive', icon: 'drive', title: 'Drive' },
    { path: '/profile', icon: 'profile', title: 'Profile' },
  ]
}
