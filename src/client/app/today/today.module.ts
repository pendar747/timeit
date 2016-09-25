import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { TodayComponent } from './today.component';
import { ActivityComponent } from '../shared/index';
import { ActivityService } from '../shared/index';

@NgModule({
  imports: [CommonModule, SharedModule],
  declarations: [TodayComponent],
  exports: [TodayComponent]
})
export class TodayModule { }
