import {Injectable} from '@angular/core'
import {UUID} from 'angular2-uuid';

/**
 * Activity
 */
@Injectable()
export class Activity {
  id: string = UUID.UUID();
  name: string;
  time: number;
  constructor(name: string, time: number) {
    this.name = name;
    this.time = time;
  }
}
