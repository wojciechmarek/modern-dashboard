import { Component } from '@angular/core';

@Component({
  selector: 'md-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {


  handleAuthButtonClick() {
    console.log('Sign In');
  }
}
