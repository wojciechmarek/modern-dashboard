import { Component, ElementRef, EventEmitter, HostListener, Output, ViewChild, inject } from '@angular/core';

@Component({
  selector: 'md-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent {
  @ViewChild('searchContainer') searchContainer: ElementRef | undefined;

  @Output() handleCloseSearch = new EventEmitter();

  closeSearch() {
    this.handleCloseSearch.emit();
  }

  @HostListener('document:keydown.esc')
  handleKeyboardEvent() { 
    this.handleCloseSearch.emit();
  }

  // @HostListener('document:click', ['$event'])
  // clickout(event: Event) {
  //   if(!this.searchContainer?.nativeElement.contains(event.target)) {
  //     this.handleCloseSearch.emit();
  //   }
  // }
}
