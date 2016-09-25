import { Component } from '@angular/core';
import { Day } from './day/day.model';
import { Activity} from '../shared/index';
import { DayService, Month, Year, Calender } from './day/day.service';

/**
 * This class represents the lazy loaded AboutComponent.
 */
@Component({
  moduleId: module.id,
  selector: 'sd-about',
  templateUrl: 'timeline.component.html',
  styleUrls: ['timeline.component.css']
})
export class TimelineComponent {

  cal: Calender = {};

  constructor(dayService: DayService) {
    this.cal = dayService.get();
  }

}