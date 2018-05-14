import { Injectable } from '@angular/core';

@Injectable()
export class MappingService {

  constructor() { }
  getTicketMappings() {
    return {
      'dateCreated': {
        'name': 'dateCreated',
        'displayName': 'Date Created',
        'showInList': true,
        'showInDetails': true,
        'searchable': false,
        'path': 'dateCreated',
        'rowNo': 2,
        'colNo': 1,
        'headerRow': true,
        'showName': true,
      },
      'submitterEmail': {
        'name': 'submitterEmail',
        'displayName': 'Submitter Email',
        'showInList': false,
        'showInDetails': true,
        'searchable': true,
        'path': 'submitterEmail',
        'rowNo': 2,
        'colNo': 2,
        'headerRow': true,
        'showName': true
      },
      'assigneeEmail': {
        'name': 'assigneeEmail',
        'displayName': 'Assignee Email',
        'showInList': false,
        'showInDetails': true,
        'searchable': true,
        'path': 'assigneeEmail',
        'rowNo': 3,
        'colNo': 2,
        'headerRow': true,
        'showName': true
      },
      'priority': {
        'name': 'priority',
        'displayName': 'Priority',
        'showInList': false,
        'showInDetails': true,
        'searchable': true,
        'path': 'priority',
        'rowNo': 3,
        'colNo': 1,
        'headerRow': true,
        'showName': true
      },
      'status': {
        'name': 'status',
        'displayName': 'Status',
        'showInList': false,
        'showInDetails': true,
        'searchable': true,
        'path': 'status',
        'rowNo': 5,
        'colNo': 1,
        'headerRow': true,
        'showName': true
      },
      'channel': {
        'name': 'channel',
        'displayName': 'Channel',
        'showInList': false,
        'showInDetails': true,
        'searchable': true,
        'path': 'channel',
        'rowNo': 4,
        'colNo': 1,
        'headerRow': true,
        'showName': true
      },
      'tags': {
        'name': 'tags',
        'displayName': 'Tags',
        'showInList': false,
        'showInDetails': true,
        'searchable': true,
        'path': 'tags',
        'rowNo': 4,
        'colNo': 1,
        'headerRow': true,
        'showName': true,
        'isTag': true
      },

      'description': {
        'name': 'description',
        'displayName': 'Description',
        'showInList': false,
        'showInDetails': true,
        'searchable': true,
        'path': 'description',
        'showName': true

      },
      'uiUrl': {
        'name': 'uiUrl',
        'displayName': 'Open in Zendesk web app',
        'showInList': false,
        'showInDetails': true,
        'searchable': true,
        'path': 'uiUrl',
        'rowNo': 1,
        'colNo': 1,
        'footerRow': true,
        'showName': false,
        'isURL': true
      },

      'requesterEmail': {
        'name': 'requesterEmail',
        'displayName': 'Requester Email',
        'showInList': true,
        'showInDetails': true,
        'searchable': true,
        'path': 'requesterEmail',
        'rowNo': 1,
        'colNo': 2,
        'headerRow': true,
        'showName': true
      },
      'title': {
        'name': 'title',
        'displayName': 'Title',
        'showInList': true,
        'showInDetails': true,
        'searchable': true,
        'path': 'title',
        'rowNo': 1,
        'colNo': 1, 
        'headerRow': true,
        'showName': true
      }

    };
  }

  getNoteMappings() {
    return {
      'dateCreated': {
        'name': 'DateCreated',
        'displayName': 'Date Created',
        'showInList': true,
        'showInDetails': true,
        'searchable': true,
        'path': 'dateCreated',
        'rowNo': 3,
        'colNo': 2,
        'headerRow': true,
        'showName': true
      },
      'accountCode': {
        'name': 'AccountCode',
        'displayName': 'Account Code',
        'showInList': false,
        'showInDetails': false,
        'searchable': false,
        'path': 'accountCode'
      },

      'modifiedBy': {
        'name': 'ModifiedBy',
        'displayName': 'Modified By',
        'showInList': true,
        'showInDetails': true,
        'searchable': true,
        'path': 'modifiedBy',
        'rowNo': 2,
        'colNo': 2, 
        'headerRow': true,
        'showName': true
      },
      'code': {
        'name': 'Code',
        'displayName': 'Code',
        'showInList': true,
        'showInDetails': true,
        'searchable': true,
        'path': 'noteCode.code',
        'rowNo': 1,
        'colNo': 1, 
        'headerRow': true,
        'showName': true
      },
      'noteContent': {
        'name': 'NoteContent',
        'displayName': 'Note Content',
        'showInList': false,
        'showInDetails': true,
        'searchable': true,
        'path': 'noteContent'
      },


      'createdBy': {
        'name': 'CreatedBy',
        'displayName': 'Created By',
        'showInList': false,
        'showInDetails': true,
        'searchable': true,
        'path': 'createdBy',
        'rowNo': 1,
        'colNo': 2,
        'headerRow': true,
        'showName': true
      },
      'noteCodeDescription': {
        'name': 'NoteCodeDescription',
        'displayName': 'Description',
        'showInList': true,
        'showInDetails': true,
        'searchable': true,
        'path': 'noteCode.description',
        'rowNo': 2,
        'colNo': 1,
        'headerRow': true,
        'showName': true
      },

      'category': {
        'name': 'Category',
        'displayName': 'Category',
        'showInList': false,
        'showInDetails': true,
        'searchable': true,
        'path': 'netCode.description'
      },
      'parentCategory': {
        'name': 'ParentCategory',
        'displayName': 'Parent Category',
        'showInList': false,
        'showInDetails': true,
        'searchable': true,
        'path': 'noteCode.category.parentCategory.description'
      }
    };


  }
}

