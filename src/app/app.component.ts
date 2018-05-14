import { Component, OnInit } from '@angular/core';

import { ZendeskticketsService } from './services/zendesktickets.service';
import { AppError } from './common/app.error';
import { NotFoundError } from './common/not.found.error';

import { Config } from './config';
import { HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { StaffIdentityService } from './services/auth/staff-identity.service';
import { TimelineConfigService, TimelineConfigSettings } from '../timeline/service/timeline-config.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  jwtToken: string;
  bypassAuthentication: boolean;
  enableStaffIdentity = true;
  zendeskTicketData = {};
  title = 'app';
  timelineData: any;
  timelineReceivedData: any;
  response: HttpResponse<any>;
  errorResponse: HttpErrorResponse;
  constructor(private timelineConfigService: TimelineConfigService,
    private staffIdentityService: StaffIdentityService,
    private zendeskTicketService: ZendeskticketsService,
    config: Config
   ) {
    const timelineConfig: TimelineConfigSettings = {
      showFilter: true,
      showTitleBar: false,
      
    };
    // listView, treeView, normalGridView
    timelineConfigService.configure(timelineConfig);
  }

  Selected(event){
    console.log('received this event in main stuff');
    console.log(event);
    this.timelineReceivedData = event;
  }

  ngOnInit() {
   // this.staffIdentityService.loginUser();
  }
}
