import { Component } from '@angular/core'

@Component({
  selector: 'md-navbar-menu-links',
  templateUrl: './navbar-menu-links.component.html',
  styleUrls: ['./navbar-menu-links.component.scss'],
})
export class NavbarMenuLinksComponent {
  links = [
    { path: '/', icon: 'home', title: 'Home' },
    { path: '/projects', icon: 'drive', title: 'Projects' },
    { path: '/People', icon: 'drive', title: 'People' },
    { path: '/Clients', icon: 'drive', title: 'Clients' },
    { path: '/cloud', icon: 'drive', title: 'Cloud' },
    { path: '/settings', icon: 'drive', title: 'Settings' },
  ]
}
