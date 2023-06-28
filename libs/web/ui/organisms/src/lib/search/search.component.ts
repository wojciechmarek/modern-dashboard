import {
  Component,
  ElementRef,
  EventEmitter,
  HostListener,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'md-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {
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

  @HostListener('document:keydown', ['$event'])
  handle3ResultKeyCombination(event: KeyboardEvent) {
    if (event.ctrlKey && event.shiftKey && event.key === '1') {
      this.handleCloseSearch.emit();
    }

    if (event.ctrlKey && event.shiftKey && event.key === '2') {
      this.handleCloseSearch.emit();
    }

    if (event.ctrlKey && event.shiftKey && event.key === '3') {
      this.handleCloseSearch.emit();
    }
  }
}
