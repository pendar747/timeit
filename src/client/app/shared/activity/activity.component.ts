import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Activity } from './activity.model';
import { LogService } from '../log.service';

@Component({
    moduleId: module.id,
    selector: 'activity',
    templateUrl: 'activity.component.html',
    styleUrls: ["activity.component.css"]
})
export class ActivityComponent implements OnInit {
    @Input()

    act: Activity;
    
    @Output() changeEvent = new EventEmitter<Activity>();

    isEditing = false;

    constructor() {
    }

    edit() {
        this.isEditing = true;
    }

    save() {
        this.isEditing = false;
        this.changeEvent.emit(this.act);
    }

    ngOnInit() { 

    }

}