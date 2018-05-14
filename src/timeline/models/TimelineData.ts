import { TimelineSchema } from './TimelineSchema';

export class TimelineData {
    Schema: TimelineSchema;
    Data: Array<any>;
    constructor() {
        this.Schema = new TimelineSchema();
        this.Data = new Array<any>();
    }
}
