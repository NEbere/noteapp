import { Observable } from 'rxjs/Observable';
import { Ticket } from '../../timeline/models/tickets';


export class MockTicketService {
    getZendeskTickets(): Observable<Array<Ticket>> {
        const retValue = [{'ticketId':12,'title':'Test',
        'description':'Test\n\n------------------\nSubmitted from: https://dev-help.orcon.net.nz/hc/en-us','dateCreated':'2018-03-05T12:12:06Z',
        'dateUpdated':'2018-03-15T01:47:29Z','requesterEmail':'rdilig@zendesk.com',
        'submitterEmail':'rdilig@zendesk.com','assigneeEmail':null,'channel':'web','priority':null,
        'status':'new','tags':'web_widget','uiUrl':'https://vocusgroupnz1508977800.zendesk.com/agent/tickets/12'},
        {'ticketId':11,'title':'Test','description':'Test','dateCreated':'2018-03-05T08:02:58Z',
        'dateUpdated':'2018-03-26T02:22:55Z','requesterEmail':'rdilig@zendesk.com','submitterEmail':'rdilig@zendesk.com',
        'assigneeEmail':null,'channel':'web','priority':null,'status':'new','tags':'test,testing,web,web_widget',
        'uiUrl':'https://vocusgroupnz1508977800.zendesk.com/agent/tickets/11'},{'ticketId':8,'title':'Test test',
        'description':'test test','dateCreated':'2018-02-26T02:45:30Z','dateUpdated':'2018-02-26T03:11:32Z',
        'requesterEmail':'wklangeraar@gmail.com','submitterEmail':'wijnand.langeraar@vocusgroup.co.nz',
        'assigneeEmail':null,'channel':'web','priority':null,'status':'new','tags':'',
        'uiUrl':'https://vocusgroupnz1508977800.zendesk.com/agent/tickets/8'},
        {'ticketId':5,'title':'test','description':'test','dateCreated':'2018-01-08T20:44:27Z',
        'dateUpdated':'2018-01-12T21:15:16Z','requesterEmail':'wklangeraar@gmail.com',
        'submitterEmail':'wijnand.langeraar@vocusgroup.co.nz','assigneeEmail':'wijnand.langeraar@vocusgroup.co.nz',
        'channel':'web','priority':null,'status':'closed','tags':'',
        'uiUrl':'https://vocusgroupnz1508977800.zendesk.com/agent/tickets/5'},
        {'ticketId':3,'title':'Test','description':'Test','dateCreated':'2017-12-12T21:55:17Z',
        'dateUpdated':'2018-03-19T22:01:40Z','requesterEmail':'wklangeraar@gmail.com',
        'submitterEmail':'wijnand.langeraar@vocusgroup.co.nz','assigneeEmail':null,
        'channel':'web','priority':null,'status':'new','tags':'','uiUrl':'https://vocusgroupnz1508977800.zendesk.com/agent/tickets/3'}];

        const retData = new Observable<Array<Ticket>>
        (
          observer => {
                  setTimeout(() => {
                      observer.next(<Array<Ticket>> retValue);
                  }, 500);
                  setTimeout(() => {
                      observer.complete();
                  }, 2000);
         }
        );
         // return retData;
         return retData;
       }
}
