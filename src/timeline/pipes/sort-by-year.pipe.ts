import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sortByYear'
})
export class SortByYearPipe implements PipeTransform {

  transform(array: any[]): any[] {

    if ( array !== undefined && array.length > 0) {
    array.sort((a: any, b: any) => {
      if (a > b) {
        return -1;
      } else if (a < b) {
        return 1;
      } else {
        return 0;
      }
    });
  }
    return array;
  }

}