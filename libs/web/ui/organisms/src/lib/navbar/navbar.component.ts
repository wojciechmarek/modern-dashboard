import { Component, EventEmitter, HostListener, Input, Output } from '@angular/core';
import { GripMenuLinkItem } from '@md/web/ui/molecules';

@Component({
  selector: 'md-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  @Input() gripMenuItems: GripMenuLinkItem[] = [];
  @Output() handleOpenSearch = new EventEmitter();

  onSearchOpenClick() {
    this.handleOpenSearch.emit();
  }

  @HostListener('document:keydown.meta.k')
  handleKeyboardEvent() {
    this.handleOpenSearch.emit();
  }
}
