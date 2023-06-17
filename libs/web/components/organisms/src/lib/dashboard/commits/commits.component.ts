import { Component } from '@angular/core';

@Component({
  selector: 'md-commits',
  templateUrl: './commits.component.html',
  styleUrls: ['./commits.component.scss'],
})
export class CommitsComponent {

  commits = Array.from({ length: 350 }, (_, i) => ({
    id: i,
    message: 'feat: add new feature',
    style: this.randomColor(),
  }));

  randomColor() {
    const randNumberFrom0To4 = Math.floor(Math.random() * 5);
    const colors = ['#253E18', '#4D7E32', '#57BF37', '#9FD282', '#CDE8C0'];
    return colors[randNumberFrom0To4];
  }
}
