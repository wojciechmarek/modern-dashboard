import { Component, OnInit } from '@angular/core';
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);

@Component({
  selector: 'md-worktime',
  templateUrl: './worktime.component.html',
  styleUrls: ['./worktime.component.css'],
})
export class WorktimeComponent {}
