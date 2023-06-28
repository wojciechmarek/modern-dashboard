import { Component, EventEmitter, HostListener, Output } from '@angular/core';

@Component({
  selector: 'md-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  @Output() handleOpenSearch = new EventEmitter();

  onSearchOpenClick() {
    this.handleOpenSearch.emit();
  }

  @HostListener('document:keydown.meta.k')
  handleKeyboardEvent() {
    this.handleOpenSearch.emit();
  }
}
