import { Component, OnInit } from '@angular/core';
import {ActivityComponent} from '../shared/index';
import {Activity} from '../shared/index';
import {ActivityService} from '../shared/index';
import {DayService} from '../timeline/day/day.service';
import {Day} from '../timeline/day/day.model';

/**
 * This class represents the lazy loaded TodayComponent.
 */
@Component({
  moduleId: module.id,
  selector: 'sd-home',
  templateUrl: 'today.component.html',
  styleUrls: ['today.component.css']
})


export class TodayComponent implements OnInit {
  acts: Activity[] = [];

  day: Day;

  newName: string = '';
  errorMessage: string;
  time: number = 0;
  activityService: ActivityService;

  /**
   * Creates an instance of the TodayComponent with the injected
   * NameListService.
   *
   * @param {NameListService} nameListService - The injected NameListService.
   */
  constructor(activityService: ActivityService, dayService: DayService) {
    this.day = dayService.getDay(new Date());
    if(!this.day) {
      this.day = new Day();
      dayService.add(this.day);
    }
    this.acts = this.day.acts;
    
    this.activityService = activityService;
  }

  addActivity() {
    this.activityService.add(this.newName, this.time);
    this.newName = "";
    this.time = 0;
  }

  ngOnInit() {
    
  }

}