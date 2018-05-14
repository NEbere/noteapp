import { Pipe, PipeTransform } from '@angular/core';
import * as _ from 'lodash';

@Pipe({
  name: 'filterBy'
})
export class FilterByPipe implements PipeTransform {

  transform(items: any, filter: string): any {
    if (filter === undefined || items === undefined || filter.trim() === '' ) { 
      return items; }
      // _.map(items['2017']['December']['2017-12-5'],'record')
      // _.includes(actualData, 'Customer Service')
      const entryPoint = 'nimesh';
      let foundRecord = _.find(items, function(item) {
        return _.find(item, function(month) {
          const one ='nimesh';
          return _.find(month, function(day) {
             const debugPoint1 = _.map(day, 'record');
            return  _.find(debugPoint1, function(field) {
              const two ='nimesh';
               let searchFound = false;
              const actualData = _.map(field, 'data');
              actualData.forEach(element => {
                const three ='nimesh';
                if (element && element.toLowerCase().indexOf(filter.toLowerCase()) >= 0) {
                  searchFound = true;
                }
              });
              return searchFound;
              // return _.map(field, 'data');
             });
          });
        });
      });
      const debugPoint = 'nimesh';
      // return items;

    }

}
