import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnInit,
  Output,
  Renderer2,
  ViewChild,
  inject,
  signal,
} from '@angular/core';

export interface GripMenuLinkItem {
  label: string;
  icon: string;
  link: string;
}

@Component({
  selector: 'md-navbar-user-manager',
  templateUrl: './navbar-user-manager.component.html',
  styleUrls: ['./navbar-user-manager.component.scss'],
})
export class NavbarUserManagerComponent {
  @Input() gripMenuItems: GripMenuLinkItem[] = [];

  @Output() handleThemeButtonClick = new EventEmitter();
  @Output() handleAuthButtonClick = new EventEmitter();
  @Output() handleSearchOpenClick = new EventEmitter();

  isGripMenuVisible = signal(false);

  renderer2 = inject(Renderer2);

  themeButtonClick() {
    this.handleThemeButtonClick.emit();
  }

  authButtonClick() {
    this.handleAuthButtonClick.emit();
  }

  searchOpenClick() {
    this.handleSearchOpenClick.emit();
  }

  gripOpenClick() {
    if (this.isGripMenuVisible()) {
      this.isGripMenuVisible.set(false);
    } else {
      this.isGripMenuVisible.set(true);
    }
  }
}
