import {
  Component,
  ElementRef,
  EventEmitter,
  HostListener,
  Input,
  OnInit,
  Output,
  ViewChild,
  signal,
} from '@angular/core';

import { demoData } from './search-data';

@Component({
  selector: 'md-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {
  @ViewChild('searchContainer') searchContainer: ElementRef | undefined;
  @ViewChild('searchInput') searchInput: ElementRef | undefined;

  @Output() handleCloseSearch = new EventEmitter();

  searchData = signal(demoData);

  ngOnInit(): void {
    setTimeout(() => {
      this.searchInput?.nativeElement.focus();
    }, 0);
  }

  closeSearch() {
    this.handleCloseSearch.emit();
  }

  onSearchChange(event: Event) {
    const searchValue = (event.target as HTMLInputElement).value;

    if (searchValue.length > 0) {
      this.searchData.set(
        demoData.filter(
          data =>
            data.title.toLowerCase().includes(searchValue.toLowerCase()) ||
            data.description.toLowerCase().includes(searchValue.toLowerCase())
        )
      );
    }
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
