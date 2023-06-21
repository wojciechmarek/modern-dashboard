import { Component } from '@angular/core';

@Component({
  selector: 'md-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss'],
})
export class CalendarComponent {
  items = [
    {
      id: '1',
      name: 'This week',
    },
    {
      id: '2',
      name: 'This month',
    },
    {
      id: '3',
      name: 'Next month',
    },
  ];
}
