import { Component, Output,  OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';

import * as _ from 'lodash';

import * as $ from 'jquery';
import { SortByYearPipe } from '../pipes/sort-by-year.pipe';
import { TimelineData } from '../models/TimelineData';
import { schemaParser } from '../models/schemaParser';
import { TimelineConfigService } from '../service/timeline-config.service';

@Component({
  selector: 'tl-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.scss']
})
export class TimelineComponent implements OnInit, OnChanges {
  /* Fields */
  timelineData: Array<TimelineData>;
  displayData: Array<any>;
  // displayData: Array<RowData>;
  years: Array<any>;
  months: Array<any>;
  dates: Array<any>;
  primaryKey: string;
  filterText = '';
  /* End Fields */
  /* Inputs */

  @Input('timeline-data')
  set setTimelineData(_timelineData: Array<TimelineData>) {
    this.timelineData = _timelineData;
  }
  /* End Inputs */
  /* Outputs */
  /* End Outputs */

  constructor(private configService:TimelineConfigService) { }

  ngOnInit() {
  }
  getColumns(passedObject) {
    const columnNames = Object.keys(passedObject.record);
    return columnNames;
  }
  getKeys(passedObject) {
    const columnNames = Object.keys(passedObject);
    return columnNames;
  }
  ngOnChanges(changes: SimpleChanges) {
    
    if (changes['setTimelineData']) {
      if (this.timelineData && this.timelineData.length > 0 ) {
        const mappedData = new Array<any>();
        const mergedData = new Array<any>();
        this.timelineData.forEach(timelineData => {
           mergedData.push(this.mapDataToSchema(timelineData.Data, timelineData.Schema));
        });
        this.displayData = new Array<any>();
        mergedData.forEach((data, index) => {
          data.forEach(element => {
            mappedData.push(element);
          });
        });
      const sortedMappedData = _.orderBy(mappedData, 'primaryValue', ['desc']);
      const groupedByYear = _.groupBy(sortedMappedData, function(item) {
                                    return item.primaryValue.getFullYear();
                    });
      const groupdData = this.groupByYearMonthDate(sortedMappedData);
      this.displayData = groupdData ;
      console.log(this.displayData);
      }
    }
  }

 groupByYearMonthDate(sortedArray) {

  const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July',
  'August', 'September', 'October', 'November', 'December'];

let year, month;

const reducedObject = sortedArray.reduce(function (acc, obj) {

const b = new Array();
b.push(obj.primaryValue.getFullYear().toString());
// b.push(monthNames[obj.primaryValue.getMonth()]);
b.push(monthNames[obj.primaryValue.getMonth()]);
// b.push(obj.dateColumn.getDate() + '-' + monthNames[obj.dateColumn.getMonth()] + '-' + obj.dateColumn.getFullYear());
b.push(obj.primaryValue.getFullYear() + '-' + ( obj.primaryValue.getMonth() + 1 ) + '-' + obj.primaryValue.getDate());

// Get custom week number, zero padded
const dayData = b[2];

// Add year if not already present
if (!acc[b[0]]) { acc[b[0]] = {}; }
year = acc[b[0]];

// Add month if not already present
if (!year[b[1]]) { year[b[1]] = {}; }
month = year[b[1]];

// Add dayData if not already present
if (!month[dayData]) { month[dayData] = []; }

// Add object to  week
month[dayData].push(obj);

return acc;
}, {});
var result = {}
Object.keys(reducedObject).reverse().forEach(function (key) {
  result[key] = reducedObject[key];
});

return reducedObject;
 }
 
  mapDataToSchema(data, schema) {
    const dataTable = []; //

        const columnsToPick = new Array<string>();
        schema.Columns.forEach(element => {
          columnsToPick.push(element.Id);
        });

        _.forEach(data, function(record) {
            const flatRecord = {};

            columnsToPick.forEach(function(column) {
                const currentColumn = schema.Columns.find(a => a.Id === column);
                flatRecord[column] = { data: schemaParser.getNestedPropertyValue(currentColumn.Path, record),
                                       id : currentColumn.Id,
                                       displayName : currentColumn.DisplayName,
                                       sortable : currentColumn.Sortable,
                                       searchable : currentColumn.Searchable};
            });

            if (flatRecord && !_.isEmpty(flatRecord)) {
                const recordWithPrimaryValue = {primaryValue: new Date(flatRecord[schema.PrimaryKey].data),
                                                record: flatRecord};
                // dataTable.push(flatRecord);
                dataTable.push(recordWithPrimaryValue);
            }
        });
        return dataTable;
  }
  isDate(obj) {
    let retValue = false;
    if (isNaN(obj)) {
      const tempObj = Date.parse(obj);
      retValue = !isNaN(tempObj); // tempObj instanceof Date;
    }
    return retValue;
}
isURL(str) {
  var pattern = new RegExp('^(https?:\\/\\/)?'+ // protocol
  '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.?)+[a-z]{2,}|'+ // domain name
  '((\\d{1,3}\\.){3}\\d{1,3}))'+ // OR ip (v4) address
  '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*'+ // port and path
  '(\\?[;&a-z\\d%_.~+=-]*)?'+ // query string
  '(\\#[-a-z\\d_]*)?$','i'); // fragment locator
  return pattern.test(str);
  
}
convertDate(dateObj) {
  return new Date(dateObj);
}

filterClear() {
  $('#txtFilter').focus();
  $('#txtFilter').val('');
  this.filterText = '';
}


}


