import { Injectable } from '@angular/core';
import { Day } from './day.model';

@Injectable()
export class DayService {
    cal: Calender = {}; 
    constructor() {
        var cal = JSON.parse(localStorage.getItem("cal"));
        if(cal) {
            this.cal = cal;
        }
        // console.log( this.getDay(new Date()) );
    }
    get() {
        return this.cal;
    }

    getYear(date: Date) {
        return this.cal[ date.getFullYear() ];
    }

    getMonth(date: Date) {
        var year = this.cal[date.getFullYear()];
        if(!year) return undefined;
        return year[ date.getFullYear() ];
    }

    getDay(date: Date): Day {
        var year = this.cal[date.getFullYear()];
        if(!year) return undefined;
        var month = year[date.getMonth()];
        if(!month) return undefined;
        return month[ date.getDate() ];
    }

    /**
     * adds a new day to the service
     */
    add(day: Day): void {
        var date = new Date(day.date);
        var year = date.getFullYear(), 
        month = date.getMonth(), dateNo = date.getDate();

        if(!this.cal[year]) {
            this.cal[year] = {};
        }
        if(!this.cal[year][month] ) {
            this.cal[year][month] = {};
        }
        this.cal[year][month][dateNo] = day;
        this.save();
    }

    set(day: Day) {
        var date = new Date(day.date), year = date.getFullYear(), 
        month = date.getMonth(), dateNo = date.getDate();
        this.cal[year][month][dateNo] = day;
        this.save();
    }

    save() {
        localStorage.setItem("cal", JSON.stringify(this.cal));
    }
}

export interface Month {
    [index: number]: Day;
}

export interface Year {
    [index: number]: Month; 
}

export interface Calender {
    [index: number]: Year;
}