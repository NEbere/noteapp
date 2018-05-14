export class MappedData {
    PrimaryValue: Date;
    Name: string;
    Data: Array<any>;
    Sortable: boolean;
    Searchable: boolean;
    constructor() { this.Data = new Array<any>(); }
}
