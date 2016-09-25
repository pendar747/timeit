import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { ToolbarComponent } from './toolbar/index';
import { NavbarComponent } from './navbar/index';
import {ActivityComponent} from './activity/activity.component';
import {Activity} from './activity/activity.model';
import {ActivityService} from './activity/activity.service';
import {LogService} from './log.service';
import {MapToIterablePipe} from './mapToIterable.pipe';
import {NumToMonthNamePipe} from './numberToMonth.pipe';
import {DayComponent} from './day/day.component';
import {DayService} from './day/day.service';

/**
 * Do not specify providers for modules that might be imported by a lazy loaded module.
 */

@NgModule({
  imports: [CommonModule, RouterModule, FormsModule],
  declarations: [DayComponent, ToolbarComponent, NavbarComponent, ActivityComponent, MapToIterablePipe, NumToMonthNamePipe],
  exports: [ToolbarComponent, NavbarComponent,
    CommonModule, FormsModule, RouterModule, ActivityComponent, MapToIterablePipe, 
    NumToMonthNamePipe, DayComponent]
})
export class SharedModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule,
      providers: [ActivityService, LogService, DayService]
    };
  }
}
