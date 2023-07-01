import { Component, signal } from '@angular/core';

@Component({
  selector: 'md-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
})
export class LayoutComponent {
  isSearchVisible = signal(false);

  gripMenuItems = [
    { label: 'Home', icon: 'home', link: '/' },
    { label: 'Work time', icon: 'square-gantt', link: '/work-time' },
    { label: 'Cloud', icon: 'cloud', link: '/cloud' },
    { label: 'Projects', icon: 'presentation', link: '/projects' },
    { label: 'Clients', icon: 'factory', link: '/clients' },
    { label: 'Employees', icon: 'users2', link: '/employees' },
    { label: 'Settings', icon: 'settings', link: '/settings' },
  ];

  onCloseSearch() {
    this.isSearchVisible.set(false);
  }

  onOpenSearch() {
    this.isSearchVisible.set(true);
  }
}
