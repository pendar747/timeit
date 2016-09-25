import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'mapToIterable'
})
export class MapToIterablePipe implements PipeTransform {

    transform(obj: Object) {
        var arr: KeyAndValue[] = [];
        for (var key in obj) {
            if (obj.hasOwnProperty(key)) {
                let keyValue: KeyAndValue = {
                    key: key,
                    value: obj[key]
                };
                arr.push(keyValue);
            }
        }
        return arr;
    }

}

interface KeyAndValue {
    key: string;
    value: any;
}