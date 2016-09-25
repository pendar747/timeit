import { Component, OnInit, Input} from '@angular/core';
import { Day } from './day.model';
import { Activity } from '../../shared/index';
import {DayService} from './day.service';

@Component({
    moduleId: module.id,
    selector: 'day',
    templateUrl: 'day.component.html'
})
export class DayComponent implements OnInit {
@Input()

    day: Day;

    dayService: DayService;

    constructor(dayService: DayService) {
        this.dayService = dayService;
    }

    ngOnInit() { 

    }

    saveActivity(act: Activity) {
        console.log("must save", act.name);
        var index = this.day.acts.findIndex(function(value: Activity): boolean {
            return value.id == act.id;
        });
        this.day.acts[index] = act;
        this.dayService.set(this.day);
    }

}