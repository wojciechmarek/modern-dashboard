import { Component, OnInit, signal } from '@angular/core';

@Component({
  selector: 'md-greetings',
  templateUrl: './greetings.component.html',
  styleUrls: ['./greetings.component.scss'],
})
export class GreetingsComponent implements OnInit {
  // create method returning the date in this format: Sat, Jun 17 2023 14:45
  generateDateAndTime = () => {
    const date = new Date();
    const dayName = date.toLocaleString('default', { weekday: 'short' });
    const day2Digit = date.toLocaleString('default', { day: '2-digit' });
    const monthName = date.toLocaleString('default', { month: 'short' });
    const year = date.getFullYear();
    const hour = date.getHours();
    const minutes = date.getMinutes();
    const time = `${dayName}, ${monthName} ${day2Digit} ${year} ${hour}:${minutes}`;
    return time;
  };

  generateGreeting = () => {
    const date = new Date();
    const hour = date.getHours();
    if (hour < 12) {
      return 'Good Morning';
    } else if (hour < 18) {
      return 'Good Afternoon';
    } else {
      return 'Good Evening';
    }
  };

  ngOnInit(): void {
    setInterval(() => {
      this.dateTime.set(this.generateDateAndTime());
      console.log(this.dateTime());
    }, 1000);
  }

  dateTime = signal(this.generateDateAndTime());
  greetings = signal(this.generateGreeting());
}
