import { Injectable } from '@angular/core';
import { TimelineSchema, Column } from '../../timeline/models/TimelineSchema';


@Injectable()
export class TicketsSchemaService {

  constructor() { }
  getTicketsSchema() {
    const ticketsSchema = new TimelineSchema();
    ticketsSchema.Name = 'ticketsSchema';
    ticketsSchema.PrimaryKey = 'dateCreated';
    ticketsSchema.Columns = new Array<Column>();

    const dateCreated = new Column;
    dateCreated.Id = 'dateCreated';
    dateCreated.Path = 'dateCreated';
    dateCreated.DisplayName = 'Date Created';

    const submitterEmail = new Column;
    submitterEmail.Id = 'submitterEmail';
    submitterEmail.Path = 'submitterEmail';
    submitterEmail.DisplayName = 'Submitter Email';

    const assigneeEmail = new Column;
    assigneeEmail.Id = 'assigneeEmail';
    assigneeEmail.Path = 'assigneeEmail';
    assigneeEmail.DisplayName = 'Assignee Email';

    const requesterEmail = new Column;
    requesterEmail.Id = 'requesterEmail';
    requesterEmail.Path = 'requesterEmail';
    requesterEmail.DisplayName = 'Requester Email';

    const priority = new Column;
    priority.Id = 'priority';
    priority.Path = 'priority';
    priority.DisplayName = 'priority';

    const status = new Column;
    status.Id = 'status';
    status.Path = 'status';
    status.DisplayName = 'Status';

    const channel = new Column;
    channel.Id = 'channel';
    channel.Path = 'channel';
    channel.DisplayName = 'Channel';

    const tags = new Column;
    tags.Id = 'tags';
    tags.Path = 'tags';
    tags.DisplayName = 'Tags';

    const description = new Column;
    description.Id = 'description';
    description.Path = 'description';
    description.DisplayName = 'Description';

    const uiUrl = new Column;
    uiUrl.Id = 'uiUrl';
    uiUrl.Path = 'uiUrl';
    uiUrl.DisplayName = 'Open in Zendesk';

    const title = new Column;
    title.Id = 'title';
    title.Path = 'title';
    title.DisplayName = 'Title';

    ticketsSchema.Columns.push(dateCreated);
    ticketsSchema.Columns.push(submitterEmail);
    ticketsSchema.Columns.push(assigneeEmail);
    ticketsSchema.Columns.push(requesterEmail);
    ticketsSchema.Columns.push(channel);
    ticketsSchema.Columns.push(priority);
    ticketsSchema.Columns.push(status);
    ticketsSchema.Columns.push(tags);
    ticketsSchema.Columns.push(description);
    ticketsSchema.Columns.push(uiUrl);
    ticketsSchema.Columns.push(title);
    return ticketsSchema;
  }
}
