import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { HomeComponent } from './home/home.component'
import { RouterModule } from '@angular/router'
import { CalendarComponent } from './calendar/calendar.component'
import { UserProfilePath } from '@md/web/common'

const routes = [
  { path: UserProfilePath.Home, component: HomeComponent },
  { path: UserProfilePath.Calendar, component: CalendarComponent },
]

@NgModule({
  declarations: [HomeComponent, CalendarComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class WebViewsUserProfileModule {}
