import { AppComponent } from "../app/app.component";
import { NgModule } from "@angular/core";
import { TimelineComponent } from "./timeline/timeline.component";
import { CalendarComponent } from "./calendar/calendar.component";
import { SortByYearPipe } from "./pipes/sort-by-year.pipe";
import { BrowserModule } from "@angular/platform-browser";
import { TimelineConfigService } from "./service/timeline-config.service";
import { CommonModule } from "@angular/common";
import { FormsModule } from '@angular/forms';
import { FilterByPipe } from "./pipes/filter-by.pipe";

@NgModule({
  declarations: [
  
    TimelineComponent,
    CalendarComponent,
    SortByYearPipe,
    FilterByPipe
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule
  ],
  providers: [TimelineConfigService],
  exports: [TimelineComponent, CalendarComponent]
})
export class TimelineModule { }
