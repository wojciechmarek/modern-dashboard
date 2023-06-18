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
      return '#253E18';
    }

    if (i % 5 === 0) {
      return '#57BF37';
    }

    if (i % 6 === 0) {
      return '#CDE8C0';
    }

    if (i < 100) {
      return '#242424';
    }

    const randNumberFrom0To4 = Math.floor(Math.random() * 5);
    const colors = ['#253E18', '#4D7E32', '#57BF37', '#9FD282', '#CDE8C0'];
    return colors[randNumberFrom0To4];
  }
}
