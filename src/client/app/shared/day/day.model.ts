import {Activity} from '../../shared/index';
import {UUID} from 'angular2-uuid';

/**
 * Day
 */
export class Day {
  date: Date;
  acts: Activity[] = [];
  id: string = UUID.UUID();
  constructor() {
    this.date = new Date();
  } 
}
