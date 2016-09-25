import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'month'
})
export class NumToMonthNamePipe implements PipeTransform {

    transform(value: number) {
        var months: string[] = ["January", "Februery", "March",
            "April", "May", "June", "July", "Augest", "September", 
            "October", "November", "December"];
        return months[value];
    }

}