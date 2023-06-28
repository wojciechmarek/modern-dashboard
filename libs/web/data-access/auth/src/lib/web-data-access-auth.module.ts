import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from './service/auth.service';
import { AuthEffects } from './effects/auth.effects';
import { EffectsModule } from '@ngrx/effects';

@NgModule({
  providers: [AuthService],
  imports: [CommonModule, EffectsModule.forRoot([AuthEffects])],
})
export class WebDataAccessAuthModule {}
