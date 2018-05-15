import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler, APP_INITIALIZER } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HttpClientModule, HTTP_INTERCEPTORS, HttpClient } from '@angular/common/http';
import { TimelineModule } from '../timeline/timeline.module';
import { ZendeskticketsService } from './services/zendesktickets.service';
import { BillplusnotesService } from './services/billplusnotes.service';
import { GlobalErrorHandler } from './common/global.error.handler';
import { BaseService } from './services/base.service';
import { Config } from './config';
import { StaffIdentityService } from './services/auth/staff-identity.service';
import { NotesAndTicketsComponent } from './notes-and-tickets/notes-and-tickets.component';
import { AuthHttp, AuthConfig } from 'angular2-jwt';
import { JwtInterceptor } from './services/auth/jwt.interceptor';
import { StorageServiceModule } from 'angular-webstorage-service';
import { MappingService } from './services/mapping.service';
import { MockTicketService } from './services/mockTicketsServices';
import { MockNoteService } from './services/mockNotesService';
import { NotesSchemaService } from './services/notes-schema.service';
import { TicketsSchemaService } from './services/tickets-schema.service';
import { WINDOW_PROVIDERS } from './services/utils/window-util.service';
import { Rest } from './common/apitest'
import { HttpModule } from '@angular/http';
import { HttpInterceptor } from './common/global.error.handler';

// This is to execute the REST service on app load, for testing. take out when not needed.
export function init_app(appLoadService: Rest) {
  return () => appLoadService.init();
}

export function get_settings(appLoadService: Rest) {
  return () => appLoadService.init();
}



const appRoutes: Routes =  [
  {path : '', component: NotesAndTicketsComponent},
  {path: 'notesandtickets', component: NotesAndTicketsComponent},
  {path: 'notesandtickets/:account', component: NotesAndTicketsComponent },
  {path: 'app', component: AppComponent}
  ];


@NgModule({
  declarations: [
    AppComponent,
    NotesAndTicketsComponent
    

  ],
  imports: [
    BrowserModule,
    TimelineModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    StorageServiceModule,
    HttpModule
  ],
  providers: [
    BaseService,
    ZendeskticketsService,
    BillplusnotesService,
    MockTicketService,
    MockNoteService,
    StaffIdentityService,
    MappingService,
    NotesSchemaService, 
    TicketsSchemaService,
    WINDOW_PROVIDERS,
    Config,
    HttpInterceptor,
    {
      // provide: HTTP_INTERCEPTORS,
      // useClass: JwtInterceptor,
      // multi: true,
      provide: ErrorHandler, 
      useClass: GlobalErrorHandler
    },
    Rest,
    { provide: APP_INITIALIZER, useFactory: init_app, deps: [Rest], multi: true },
    { provide: APP_INITIALIZER, useFactory: get_settings, deps: [Rest], multi: true }
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
