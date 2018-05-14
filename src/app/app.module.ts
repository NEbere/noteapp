import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
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
    StorageServiceModule
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
    {
      // provide: HTTP_INTERCEPTORS,
      // useClass: JwtInterceptor,
      // multi: true,
      provide: ErrorHandler, 
      useClass: GlobalErrorHandler
    }
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
