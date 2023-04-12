import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EffectsModule } from '@ngrx/effects';
import { AuthEffects, AuthService } from './auth';

@NgModule({
  providers: [AuthService],
  imports: [CommonModule, EffectsModule.forFeature([AuthEffects])],
})
export class WebDataAccessModule {}
