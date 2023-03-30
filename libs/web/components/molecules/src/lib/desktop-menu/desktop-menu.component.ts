import { Component } from '@angular/core'

@Component({
  selector: 'md-desktop-menu',
  templateUrl: './desktop-menu.component.html',
  styleUrls: ['./desktop-menu.component.scss'],
})
export class DesktopMenuComponent {
  links = [
    { path: '/', icon: 'home', title: 'Home' },
    { path: '/drive', icon: 'drive', title: 'Drive' },
    { path: '/user-profile', icon: 'profile', title: 'Profile' },
  ]
}
