import { Component } from '@angular/core';

@Component({
  selector: 'md-jira-tickets',
  templateUrl: './jira-tickets.component.html',
  styleUrls: ['./jira-tickets.component.scss'],
})
export class JiraTicketsComponent {
  items = [
    {
      id: '1',
      name: 'Bayer - support',
    },
    {
      id: '2',
      name: 'Google - Google Stadia',
    },

    {
      id: '3',
      name: 'Microsoft - Blazor support',
    },
  ];
}
