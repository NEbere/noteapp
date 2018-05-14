import * as _ from 'lodash';

import { schemaParser } from './schemaParser';

export enum SchemaFieldTypes { Undefined = 0, Uri = 1, Tag = 2 }
export enum SchemaTypes {Object = 0, Array = 2}

export class TimelineSchema {
    Name: string;
    PrimaryKey: string;
    Columns: Array<Column>;

    public mapDataToSchema(data, schema) {
        const allColumns = this.Columns;
        const dataTable = []; //
       _.forEach(data , function(record) {
          dataTable.push(schemaParser.flattenObject(record));
       });
       return dataTable;
    }
}

export class Column {
    Id: string;
    DisplayName?: string;
    Type: SchemaFieldTypes;
    Sortable?: boolean;
    Searchable?: boolean;
    Path: string;
}
