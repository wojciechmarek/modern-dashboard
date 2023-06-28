import { Component, Input } from '@angular/core'

export interface BreadcrumbItem {
  label: string;
  url: string;
}

@Component({
  selector: 'md-breadbrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.scss'],
})
export class BreadcrumbComponent {
  @Input() items: BreadcrumbItem[] = [];
}
