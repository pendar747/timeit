import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TimelineComponent } from './timeline.component';
import { DayComponent } from '../shared/index';
import { SharedModule } from '../shared/shared.module';
import {MapToIterablePipe} from '../shared/mapToIterable.pipe';

@NgModule({
    imports: [CommonModule, SharedModule],
    declarations: [TimelineComponent],
    exports: [TimelineComponent]
})

export class TimelineModule { }
