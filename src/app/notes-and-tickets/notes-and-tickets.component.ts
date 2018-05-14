import { Component, OnInit, Inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import * as $ from 'jquery';


import { TimelineConfigService, TimelineConfigSettings } from '../../timeline/service/timeline-config.service';
import { MockNoteService } from '../services/mockNotesService';
import { TimelineData } from '../../timeline/models/TimelineData';
import { MockTicketService } from '../services/mockTicketsServices';
import { NotesSchemaService } from '../services/notes-schema.service';
import { TicketsSchemaService } from '../services/tickets-schema.service';
import { forkJoin } from 'rxjs/observable/forkJoin';
import { BillplusnotesService } from '../services/billplusnotes.service';
import { ZendeskticketsService } from '../services/zendesktickets.service';
import { DOCUMENT } from '@angular/platform-browser';
import { WINDOW } from '../services/utils/window-util.service';

@Component({
    selector: 'notes-and-tickets',
    templateUrl: './notes-and-tickets.component.html',
    styleUrls: ['./notes-and-tickets.component.scss']
})
export class NotesAndTicketsComponent implements OnInit {

    timelineDataCollection: Array<TimelineData>;
    topMostDiv: string;

    constructor(private mockNoteService: MockNoteService,
        private mockTicketService: MockTicketService,
        private noteService: BillplusnotesService,
        private ticketService: ZendeskticketsService,
        private noteSchemaService: NotesSchemaService,
        private ticketSchemaService: TicketsSchemaService,
        private timelineConfigService: TimelineConfigService,
        private route: ActivatedRoute,
        @Inject(DOCUMENT) private document: Document,
        @Inject(WINDOW) private window) {
        const timelineConfig: TimelineConfigSettings = {
            showFilter: true,
            showTitleBar: false,
        };

        timelineConfigService.configure(timelineConfig);
    }

    scroll = (): void => {
        // console.log('handling scroll events here');
        const winTop = $(this.window).scrollTop();
    
        const $divs = this.document.getElementsByClassName('dayClass');
        const topDiv = $.grep($divs, function(item) {
            return $(item).position().top - 60 <= winTop;
        });
        if (topDiv && topDiv.length > 0 ) {
        this.topMostDiv = topDiv[topDiv.length - 1].id; } else {
          this.topMostDiv = $divs[0].id;
        }
        // this.calendarUtil.setCalendar(this.topMostDiv);
        // this.calendarUtil.setCurrentDayClass(this.topMostDiv);
      }



    ngOnInit() {
        window.addEventListener('scroll', this.scroll, true);

        const account = this.route.snapshot.paramMap.get('account');
        if (account) {
            // Uncomment this to fetch mock data

            this.timelineDataCollection = new Array<TimelineData>();
            const notesSchema = this.noteSchemaService.getNotesSchema();
            const mockNoteTimelineData = new TimelineData();
            mockNoteTimelineData.Schema = notesSchema;
            const noteTimelineData = new TimelineData();
            noteTimelineData.Schema = notesSchema;

            const ticketSchema = this.ticketSchemaService.getTicketsSchema();
            const mockTicketTimelineData = new TimelineData();
            mockTicketTimelineData.Schema = ticketSchema;

            const ticketTimelineData = new TimelineData();
            ticketTimelineData.Schema = ticketSchema;

            const mockNotes = this.mockNoteService.getNotes();
            const mockTickets = this.mockTicketService.getZendeskTickets();
            const notes = this.noteService.getNotes(account);
            const tickets = this.ticketService.getTickets(account);

            forkJoin(mockNotes, mockTickets, notes, tickets)
            .subscribe(results => {
                mockNoteTimelineData.Data = results[0];
                mockTicketTimelineData.Data = results[1];
                noteTimelineData.Data = results[2];
                ticketTimelineData.Data = results[3];
            },
            (errors => {
                const mocknoteError = errors[0];
                const mockticketError = errors[1];
                const noteError = errors[2];
                const ticketError = errors[3];
             }),
            (() => {
                this.timelineDataCollection.push(mockNoteTimelineData);
                this.timelineDataCollection.push(mockTicketTimelineData);
                this.timelineDataCollection.push(noteTimelineData);
                this.timelineDataCollection.push(ticketTimelineData);
                this.timelineDataCollection = this.timelineDataCollection.slice();
            })
        );
        }
    }

}
