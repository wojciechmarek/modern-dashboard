import { Component } from '@angular/core'
import { ThemeActions } from '@md/web/common/store';
import { Store } from '@ngrx/store';

@Component({
  selector: 'md-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  constructor(private readonly store: Store) {}

  isDark = false;

  handleThemeToggle() {
    if (this.isDark) {
      this.store.dispatch(ThemeActions.changeToDark());
    }
    else {
      this.store.dispatch(ThemeActions.changeToLight());
    }

    this.isDark = !this.isDark
  }

}
