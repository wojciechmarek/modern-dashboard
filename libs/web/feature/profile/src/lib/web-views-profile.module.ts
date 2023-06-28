import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';
import { CalendarComponent } from './calendar/calendar.component';

const routes = [
  { path: 'home', component: HomeComponent },
  { path: 'calendar', component: CalendarComponent },
];

@NgModule({
  declarations: [HomeComponent, CalendarComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class WebViewsProfileModule {}
