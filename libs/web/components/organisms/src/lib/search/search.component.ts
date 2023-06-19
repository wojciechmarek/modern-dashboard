import { Component, ElementRef, EventEmitter, HostListener, OnInit, Output, ViewChild, inject } from '@angular/core';

@Component({
  selector: 'md-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit{
  @ViewChild('searchContainer') searchContainer: ElementRef | undefined;
  @ViewChild('searchInput') searchInput: ElementRef | undefined;

  @Output() handleCloseSearch = new EventEmitter();

  ngOnInit(): void {
    setTimeout(() => {
      this.searchInput?.nativeElement.focus();
    }, 0);
  }

  closeSearch() {
    this.handleCloseSearch.emit();
  }

  @HostListener('document:keydown.esc')
  @HostListener('document:keydown.meta.k')
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
