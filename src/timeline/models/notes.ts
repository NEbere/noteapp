export class Note {
    accountCode: string;
    noteContent: string;
    dateCreated: string;
    modifiedBy: string;
    createdBy: string;
    noteCode: NoteCode;
    someMessage ? = 'this should be part of note';
    static displayMessage() { console.log('I am note'); }
 
}

export class NoteCode {
    description: string;
    code: string;
}

export class NoteCodeCategory {
    description: string;
    parentCategory: NoteCodeCategory;
}
