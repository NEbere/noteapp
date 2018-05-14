import { Injectable } from '@angular/core';
import { TimelineSchema, Column } from '../../timeline/models/TimelineSchema';


@Injectable()
export class NotesSchemaService {

    constructor() { }
    getNotesSchema() {
        const notesSchema = new TimelineSchema();
        notesSchema.Name = 'NotesSchema';
        notesSchema.PrimaryKey = 'dateCreated';
        notesSchema.Columns = new Array<Column>();

        const dateCreated = new Column;
        dateCreated.Id = 'dateCreated';
        dateCreated.Path = 'dateCreated';
        dateCreated.DisplayName = 'Date Created';


        const accountCode = new Column;
        accountCode.Id = 'accountCode';
        accountCode.Path = 'accountCode';
        accountCode.DisplayName = 'Account Code';

        const modifiedBy = new Column;
        modifiedBy.Id = 'modifiedBy';
        modifiedBy.Path = 'modifiedBy';
        modifiedBy.DisplayName = 'Modified By';

        const code = new Column;
        code.Id = 'code';
        code.Path = 'noteCode.code';
        code.DisplayName = 'Code';

        const noteContent = new Column;
        noteContent.Id = 'noteContent';
        noteContent.Path = 'noteContent';
        noteContent.DisplayName = 'noteContent';

        const createdBy = new Column;
        createdBy.Id = 'createdBy';
        createdBy.Path = 'createdBy';
        createdBy.DisplayName = 'Created By';

        const noteCodeDescription = new Column;
        noteCodeDescription.Id = 'noteCodeDescription';
        noteCodeDescription.Path = 'noteCode.description';
        noteCodeDescription.DisplayName = 'NoteCode Description';

        const category = new Column;
        category.Id = 'category';
        category.Path = 'noteCode.category.description';
        category.DisplayName = 'Category';

        const parentCategory = new Column;
        parentCategory.Id = 'parentCategory';
        parentCategory.Path = 'noteCode.category.parentCategory.description';
        parentCategory.DisplayName = 'Parent Category';

        notesSchema.Columns.push(dateCreated);
        notesSchema.Columns.push(accountCode);
        notesSchema.Columns.push(modifiedBy);
        notesSchema.Columns.push(code);
        notesSchema.Columns.push(noteCodeDescription);
        notesSchema.Columns.push(noteContent);
        notesSchema.Columns.push(createdBy);
        notesSchema.Columns.push(category);
        notesSchema.Columns.push(parentCategory);
        return notesSchema;
    }
}
