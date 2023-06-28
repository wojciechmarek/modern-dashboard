import { Component } from '@angular/core';

@Component({
  selector: 'md-commits',
  templateUrl: './commits.component.html',
  styleUrls: ['./commits.component.scss'],
})
export class CommitsComponent {

  commits = Array.from({ length: 150 }, (_, i) => ({
    id: i,
    message: 'feat: add new feature',
    style: this.randomColor(i),
  }));

  randomColor(i: number) {
    if (i % 4 === 0) {
      return 'var(--commits-color-1)';
    }

    if (i % 5 === 0) {
      return 'var(--commits-color-2)';
    }

    if (i % 6 === 0) {
      return 'var(--commits-color-3)';
    }

    if (i < 100) {
      return 'var(--commits-color-0)';
    }

    const randNumberFrom0To4 = Math.floor(Math.random() * 5);
    const colors = [
      'var(--commits-color-0)',
      'var(--commits-color-1)',
      'var(--commits-color-2)',
      'var(--commits-color-3)',
      'var(--commits-color-4)',
    ];
    return colors[randNumberFrom0To4];
  }
}
