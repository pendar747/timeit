import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { APP_BASE_HREF } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { routes } from './app.routes';

import { TimelineModule } from './timeline/timeline.module';
import { TodayModule } from './today/today.module';
import { SharedModule } from './shared/shared.module';

import {ActivityService} from './shared/activity/activity.service';
import {DayService} from './timeline/day/day.service';

import {LogService} from './shared/log.service';
import {MapToIterablePipe} from './shared/mapToIterable.pipe';

@NgModule({
  imports: [BrowserModule, HttpModule, RouterModule.forRoot(routes), TimelineModule, TodayModule, SharedModule.forRoot()],
  declarations: [AppComponent],
  providers: [{
    provide: APP_BASE_HREF,
    useValue: '<%= APP_BASE %>'
  }, ActivityService, LogService, DayService],
  bootstrap: [AppComponent]

})

export class AppModule { }
