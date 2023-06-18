import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { ReadComponent } from './read/read.component';
import { UnreadComponent } from './unread/unread.component';
import { AllComponent } from './all/all.component';

@NgModule({
  imports: [CommonModule],
  declarations: [HomeComponent, ReadComponent, UnreadComponent, AllComponent],
})
export class WebViewsNotificationsModule {}
