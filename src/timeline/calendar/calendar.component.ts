import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'tl-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {

  days: Array<string>;
  currentDate: Date;
  displayDays: Array<number>;
  month: number;
  year: number;
  topMostDiv: string;

  MonthNames = ['January', 'February', 'March', 
                'April', 'May', 'June', 'July', 'August', 
                'September', 'October', 'November', 'December'];

  constructor() { }

  ngOnInit() {
    const curDate = new Date();
    const dateToPass = curDate.getFullYear() + '-' + this.inject0((curDate.getMonth() + 1)) + '-' + this.inject0(curDate.getDate());
    this.setCalendar(dateToPass);
  }

  incrementMonth() {
    this.month++;
    if (this.month > 11) { this.month = 0; this.year++;}
    this.setCalendar(this.year + '-' +  (this.month + 1) + '-1');
  }

  decrementMonth() {
    this.month--;
    if (this.month < 0) { this.month = 11; this.year--;}
    this.setCalendar(this.year + '-' + (this.month + 1) + '-1');
  }

  incrementYear() {
    this.year++;
    this.setCalendar(this.year + '-' + (this.month + 1) + '-1');
  }

  decrementYear() {
    this.year--;
    this.setCalendar(this.year + '-' + (this.month + 1) + '-1');
  }

  setCalendar(dateString: string) {

    /* IE Fix */
    const datesplit = dateString.split('-');
    this.currentDate = new Date(datesplit[0] + '-' + this.inject0(datesplit[1]) + '-' + this.inject0(datesplit[2]))

    /* end IE Fix */
    // this.currentDate = new Date(dateString);
    this.month = this.currentDate.getMonth();  // new Date(this.currentDate).getMonth();
    this.year = this.currentDate.getFullYear();
    const firstDayOfMonth = new Date( this.year + '-' + this.inject0((this.month + 1)) + '-' + '01').getDay();
    const weeksInMonth = this.getWeeksInMonth(this.month, this.year);

    this.days = new Array<string>(weeksInMonth * 7 );
    this.days.fill(' ');
    const numberOfDays = this.daysInMonth(this.month + 1, this.year);
    for (let index = firstDayOfMonth ; index < firstDayOfMonth + numberOfDays; index++) {
      this.days[index] = (index - firstDayOfMonth + 1).toString();
    }

    /* */

    $('.days li').removeClass('active');
    
    $('.days li').removeClass('hasData');
    const listOfDivs = document.getElementsByClassName('dayClass');
      let listOfDays = new Array<string>();
      for (let index = 0; index < listOfDivs.length; index++) {
        const valToPush = listOfDivs[index].id.split('-')[2] ;
        let found = $.inArray(valToPush, listOfDays);
        if(found < 0 ){ 
          const currentValue = listOfDivs[index].id;
          const currentValueSplit = currentValue.split('-');
          if ( this.month === (parseInt(currentValueSplit[1], 10) - 1) && this.year === parseInt(currentValueSplit[0], 10 )) {
             listOfDays.push(currentValueSplit[2]);}
        }
       }

       console.log(listOfDays);
       
       listOfDays.forEach(element => {
        let objWithData =  $('.days li').filter(function () {
          let curValue = parseInt(element, 10);
             return $(this).html().trim() === curValue.toString();
         });
         objWithData.addClass('hasData');
       });
       

    if (this.topMostDiv) {
       const divSplit = this.topMostDiv.split('-');
       const textToSearch = divSplit[2];
       const intValue = parseInt(textToSearch, 10);
       // const thisObj =  $('.days').find('option[text="' + intValue + '"]')[0];
      
      const thisObj =  $('.days li').filter(function () {
          return $(this).html().trim() === intValue.toString();
       });
      if ( this.month === (parseInt(divSplit[1], 10) - 1) && this.year === parseInt(divSplit[0], 10 )) {
      thisObj.addClass('active');
    }
  }
    /* */
  }

  daysInMonth (month, year) {
    return new Date(year, month, 0).getDate();
  }

  getWeeksInMonth(month, year) {
    let weeks = [],
       firstDate = new Date(year, month, 1),
       lastDate = new Date(year, month + 1, 0),
       numDays= lastDate.getDate();
    let weeksCount = 0;
    let start = 1;
    let end = 7 - firstDate.getDay();
    while (start <= numDays) {
        weeksCount ++;
        weeks.push({start: start, end: end});
        start = end + 1;
        end = end + 7;
        if (end > numDays) {
            end = numDays;
        }
    }
     return weeksCount;
 }

  dayClicked(day) {
    const selectedDay = this.prefix0(this.year + '-' + (this.month + 1) + '-' + day);
    const listOfDivs = document.getElementsByClassName('dayClass');
    let listOfDays = new Array<string>();
    for (let index = 0; index < listOfDivs.length; index++) {
      listOfDays.push(this.prefix0(listOfDivs[index].id));
    }
    const scrollDivId = this.getNearestDay(selectedDay, listOfDays);
    console.log('scrolling to div ' + scrollDivId);
    const elmnt = document.getElementById(scrollDivId);
    elmnt.scrollIntoView();
  }

  backToTop() {

    const listOfDivs = document.getElementsByClassName('dayClass');

    const scrollDivId = listOfDivs[0].id;
    console.log('scrolling to div' + scrollDivId);
    // const elmnt = document.getElementById(scrollDivId);
    const elmnt = document.getElementsByClassName('parent')[0];
    elmnt.scrollIntoView(true);
    window.scrollBy(0, -60);
  }

  prefix0(dateString: string) {
    const datesplit = dateString.split('-');
    return datesplit[0] + '-' + this.inject0(datesplit[1]) + '-' + this.inject0(datesplit[2]);
  }
  inject0(numPassed) {
    // this is an ie Fix, date creates problem in ie if single digit is passed for either
    // month or day
    return  ('0' + numPassed).slice(-2);
  }

  getNearestDay(dayToLook: string, listOfDays: Array<string>) {
    const testDate = new Date(dayToLook);
    let bestDate = listOfDays.length;
    let bestDiff = -(new Date(0, 0, 0)).valueOf();
    let currDiff = 0;

    for (let i = 0; i < listOfDays.length; ++i) {
    currDiff = Math.abs(<any>new Date(listOfDays[i]) - <any>testDate);
    if (currDiff < bestDiff) {
       bestDate = i;
       bestDiff = currDiff;
      }
    }
    return listOfDays[bestDate];
  }

}
