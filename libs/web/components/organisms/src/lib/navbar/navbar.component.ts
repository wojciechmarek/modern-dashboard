import { Component } from '@angular/core'

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
}
