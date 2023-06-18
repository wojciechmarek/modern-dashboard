import { Component, signal } from '@angular/core'

@Component({
    selector: 'md-layout',
    templateUrl: './layout.component.html',
    styleUrls: ['./layout.component.scss'],
})
export class LayoutComponent {
    isSearchVisible = signal(false);

    onCloseSearch() {
        this.isSearchVisible.set(false);
    }

    onOpenSearch() {
        this.isSearchVisible.set(true);
    }
}
