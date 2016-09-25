import { Injectable } from '@angular/core';
import { Activity } from './activity.model';
import { DayService } from '../../timeline/day/day.service';
import { Day } from '../../timeline/day/day.model';

@Injectable()
export class ActivityService {
    acts: Activity[] = []; 
    dayService: DayService;
    constructor(dayService: DayService) {
        this.dayService = dayService;
    }

    get() {
        return this.acts;
    }

    add(name: string, time: number) {
        var act = new Activity(name, time);
        this.acts.push(act);
        var day = this.dayService.getDay( new Date() );
        if(day) {
            day.acts.push(act);
            this.dayService.set(day) ;
        } else {
            day = new Day();
            day.acts.push(act);
            this.dayService.add(day);
        }
    }
}