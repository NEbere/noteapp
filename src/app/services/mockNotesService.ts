
// import { DeferObservable } from 'rxjs/observable/DeferObservable';
// import { PromiseObservable } from 'rxjs/observable/PromiseObservable';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/delay';
import { Note } from '../../timeline/models/notes';



export class MockNoteService {
    getNotes(): Observable<Array<Note>> {
        const retValue = [
            {
                'accountCode': '96993613',
                'noteContent': '31 Oct 2017 12:26:49 - DD received and loaded via BillPlus.',
                'dateCreated': '2017-10-31T12:26:49',
                'modifiedBy': 'NZ\\svcExternalSales',
                'createdBy': 'NZ\\svcExternalSales',
                'noteCode': {
                    'description': 'DD Authority for recurring billing',
                    'code': '1018',
                    'category': {
                        'description': 'Finance',
                        'parentCategory': {
                            'description': 'Finance',
                            'parentCategory': null
                        }
                    }
                }
            },
            {
                'accountCode': '96993613',
                // tslint:disable-next-line:max-line-length
                'noteContent': 'The offer: GoTalkRolloverCalls (Rollover Calls ) has been allocated to the account. The offer will be applied PreFirstBill',
                'dateCreated': '2017-10-31T12:34:46',
                'modifiedBy': 'NZ\\svcCoreSales',
                'createdBy': 'NZ\\svcCoreSales',
                'noteCode': {
                    'description': 'Add / Change / Upsell',
                    'code': '999',
                    'category': {
                        'description': 'Maintenance',
                        'parentCategory': {
                            'description': 'Contact Centre',
                            'parentCategory': null
                        }
                    }
                }
            },
            {
                'accountCode': '96993613',
                // tslint:disable-next-line:max-line-length
                'noteContent': 'The offer: GoTalkCredit50 (upto $50 credit on GoTalk account after ) has been allocated to the account. The offer will be applied PostFirstBill',
                'dateCreated': '2017-10-31T12:34:46',
                'modifiedBy': 'NZ\\svcCoreSales',
                'createdBy': 'NZ\\svcCoreSales',
                'noteCode': {
                    'description': 'Add / Change / Upsell',
                    'code': '999',
                    'category': {
                        'description': 'Maintenance',
                        'parentCategory': {
                            'description': 'Contact Centre',
                            'parentCategory': null
                        }
                    }
                }
            },
            {
                'accountCode': '96993613',
                // tslint:disable-next-line:max-line-length
                'noteContent': 'The offer: Prepay_MVNO_Mobile_Aug_2016 (Discount credit for active bundled internet and mobile) has been allocated to the account. The offer will be applied OnBillrun',
                'dateCreated': '2017-10-31T12:34:47',
                'modifiedBy': 'NZ\\svcCoreSales',
                'createdBy': 'NZ\\svcCoreSales',
                'noteCode': {
                    'description': 'Add / Change / Upsell',
                    'code': '999',
                    'category': {
                        'description': 'Maintenance',
                        'parentCategory': {
                            'description': 'Contact Centre',
                            'parentCategory': null
                        }
                    }
                }
            },
            {
                'accountCode': '96993613',
                // tslint:disable-next-line:max-line-length
                'noteContent': '***PLEASE COPY & PASTE THIS NOTE IF YOU ARE XFERRING THE CALL***\r\n\r\n================================\r\nNEXT CONNECT AGENT:\r\nFull LSP details are needed - Spark account number needed\r\n================================\r\n\r\n1. Please confirm the correct LSP details and ensure they match in Wireline \r\n2. Please update UBA ticket #31403159# accordingly\r\n\r\nSMS sent',
                'dateCreated': '2017-10-31T14:02:29',
                'modifiedBy': 'NZ\\Regan.Sampson',
                'createdBy': 'NZ\\Regan.Sampson',
                'noteCode': {
                    'description': 'Account Investigation',
                    'code': '6080',
                    'category': {
                        'description': 'Other',
                        'parentCategory': {
                            'description': 'All Departments',
                            'parentCategory': null
                        }
                    }
                }
            },
            {
                'accountCode': '96993613',
                'noteContent': 'Internet Services have been activated on 31 Oct 2017.',
                'dateCreated': '2017-10-31T15:07:55',
                'modifiedBy': 'NZ\\LisaW',
                'createdBy': 'NZ\\LisaW',
                'noteCode': {
                    'description': 'Internet Account Activated',
                    'code': '204',
                    'category': {
                        'description': 'Service Changes',
                        'parentCategory': {
                            'description': 'IT',
                            'parentCategory': null
                        }
                    }
                }
            },
            {
                'accountCode': '96993613',
                // tslint:disable-next-line:max-line-length
                'noteContent': '31/10/2017 3:11:50 p.m. update\r\n=================================\r\nTicket no.: 31404852\r\nActioned by: NZ\\LisaW\r\nAction taken: \r\n\r\nrequested in ticket 31405174\r\n\r\nOct 31 2017  2:42PM TICKET ALLOCATED\r\n=================================\r\nTicket no.: 31404852 \r\nAction type: Forwarded from Slingshot Tolls and Billing to SDR - Copper Other (UBA, VDSL & WSA)\r\nAction required: \r\n\r\nNimesh Yogesh Trivedi -v-\r\n\r\ncust is calling back from txt message\r\nadv cust we need to know their spark account #\r\ncust adv account #209621169 \r\ncust would like HL\r\nadv cust the req will be put through\r\nEOC\r\n\r\n************************************************\r\nHi Team,\r\n\r\nCan we please add HL to the account?\r\n\r\nThank you!',
                'dateCreated': '2017-10-31T14:42:07',
                'modifiedBy': 'NZ\\svcStarminder',
                'createdBy': 'NZ\\Scott-Warren.Brown',
                'noteCode': {
                    'description': 'Add-On Add / Change / Upsell',
                    'code': '6069',
                    'category': {
                        'description': 'Maintenance',
                        'parentCategory': {
                            'description': 'Contact Centre',
                            'parentCategory': null
                        }
                    }
                }
            },
            {
                'accountCode': '96993613',
                // tslint:disable-next-line:max-line-length
                'noteContent': 'Customer changed plan from FreeInternetSS to SS_access_WVS0_WSA_Unlimited_Feb2016 on 06 Nov 2017. Customer stays on the same billing cycle. Plan change price difference was not applied.',
                'dateCreated': '2017-11-06T06:30:15',
                'modifiedBy': 'NZ\\svcSQLDBCoresrv01',
                'createdBy': 'NZ\\svcSQLDBCoresrv01',
                'noteCode': {
                    'description': 'Move/Add/Change',
                    'code': '200',
                    'category': {
                        'description': 'Service Changes',
                        'parentCategory': {
                            'description': 'IT',
                            'parentCategory': null
                        }
                    }
                }
            },
            {
                'accountCode': '96993613',
                // tslint:disable-next-line:max-line-length
                'noteContent': '7/11/2017 12:49:11 p.m. update\r\n=================================\r\nTicket no.: 31464402\r\nActioned by: NZ\\LisaW\r\nAction taken: \r\n\r\nmodem sent in ticket 31470990\r\n\r\nNov  6 2017  7:44PM TICKET ALLOCATED\r\n=================================\r\nTicket no.: 31464402 \r\nAction type: Forwarded from Slingshot Tolls and Billing to SDR - Copper Other (UBA, VDSL & WSA)\r\nAction required: \r\n\r\nNimesh Yogesh Trivedi(V)\r\n\r\ncust said connection is comleted but hasn\'t received the modem\r\ncust is angry because it\'s not convenience \r\napologised and we will send it ASAP \r\n\r\n---------------------------------------\r\nHi team\r\nCould you send a modem to customer ASAP, cust got connection but hasn\'t received the modem\r\nNF4V ( VDSL )\r\nAddress :110 A ST GEORGES ROAD  , AVONDALE, AUCKLAND, 1026 \r\nThanks ',
                'dateCreated': '2017-11-06T19:44:12',
                'modifiedBy': 'NZ\\svcStarminder',
                'createdBy': 'NZ\\sue.han',
                'noteCode': {
                    'description': 'Hardware Delivery',
                    'code': '1501',
                    'category': {
                        'description': 'Connections',
                        'parentCategory': {
                            'description': 'Contact Centre',
                            'parentCategory': null
                        }
                    }
                }
            },
            {
                'accountCode': '96993613',
                // tslint:disable-next-line:max-line-length
                'noteContent': '- OBC\r\n\r\n- power retention\r\n\r\n- cust requested to go back to MEEN\r\n\r\n- spoke to the AH -Nimesh Yogesh Trivedi\r\n\r\n- discussed\r\n\r\n-  Cust is locked in for 3 years contract with cheaper rates and 20% ppd\r\n\r\n- cannot retain - cust already got a good offer from us for $59.95 UNL Fibre\r\n\r\n',
                'dateCreated': '2017-11-14T12:00:58',
                'modifiedBy': 'NZ\\Nupur.Chawla',
                'createdBy': 'NZ\\Nupur.Chawla',
                'noteCode': {
                    'description': 'Service Add / Change / Upsell',
                    'code': '6070',
                    'category': {
                        'description': 'Maintenance',
                        'parentCategory': {
                            'description': 'Contact Centre',
                            'parentCategory': null
                        }
                    }
                }
            },
            {
                'accountCode': '96993613',
                // tslint:disable-next-line:max-line-length
                'noteContent': '14/11/2017 1:51:09 p.m. update\r\n=================================\r\nTicket no.: 31548382\r\nActioned by: NZ\\Nick.Shaw\r\nAction taken: \r\n\r\nSuccessfully acknowledged withdrawal for ICP: 0174398158LC4D0\r\n\r\nNov 14 2017 12:06PM TICKET ALLOCATED\r\n=================================\r\nTicket no.: 31548382 \r\nAction type: Forwarded from Slingshot Tolls and Billing to SDR - Power\r\nAction required: \r\n\r\n******************************************\r\n\r\nHi Team\r\n\r\nCustomer has churned back to previous power retailer, please accept withdrawal for ICP: \t0174398158LC4D0\r\n\r\n\r\nThanks\r\n******************************************\r\n',
                'dateCreated': '2017-11-14T12:06:21',
                'modifiedBy': 'NZ\\svcStarminder',
                'createdBy': 'NZ\\Nupur.Chawla',
                'noteCode': {
                    'description': 'Service Add / Change / Upsell',
                    'code': '6070',
                    'category': {
                        'description': 'Maintenance',
                        'parentCategory': {
                            'description': 'Contact Centre',
                            'parentCategory': null
                        }
                    }
                }
            },
            {
                'accountCode': '96993613',
                // tslint:disable-next-line:max-line-length
                'noteContent': 'Nimesh Yogesh Trivedi -v-\r\n\r\ncust said tried to port number lastnight but didn\'t port\r\nadv. cust hes calling off the number now\r\ncust said he tried to call his old number but didn\'t ring, went straight to VM\r\ntried calling cust mobile number as well, same thing happened, went to VM\r\nadv. cust to take sim out, restart phone,\r\ncalled cust and was able to get through\r\n\r\nEOC',
                'dateCreated': '2017-11-22T17:27:23',
                'modifiedBy': 'NZ\\Siah.Etuale',
                'createdBy': 'NZ\\Siah.Etuale',
                'noteCode': {
                    'description': 'Other Provioning Problem / Delay',
                    'code': '1142',
                    'category': {
                        'description': 'Connections',
                        'parentCategory': {
                            'description': 'Contact Centre',
                            'parentCategory': null
                        }
                    }
                }
            },
            {
                'accountCode': '96993613',
                // tslint:disable-next-line:max-line-length
                'noteContent': 'Hi Nimesh, and thanks for your email.\r\n\r\n\r\n\r\nIn order to protect the security of your account, we will need you to call the Slingshot Contact Centre on 0800 89 2000 to retrieve or reset your password.\r\n\r\n\r\n\r\nWe hope to hear from you soon.\r\n\r\n\r\n\r\nBest regards\r\n\r\n\r\n\r\nLizzie S\r\n\r\nSlingshot Customer Service\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n-----Original Message-----\r\nFrom: "slingshot-www" <slingshotwebsite@services.vocusgroup.co.nz> \r\nSent: Tuesday, 28 November 2017 8:39 AM \r\nTo: "technicalsupport@team.slingshot.co.nz" <technicalsupport@team.slingshot.co.nz> \r\nSubject: Online Contact Enquiry \r\n\r\n\r\n\r\nName: Nimesh Trivedi\r\n\r\nPhone Number: 0212426410\r\n\r\nEmail: nimeshtrivedi@hotmail.com\r\n\r\nHow can i access my slingshot webmail? The only password i have setup is accounts password which does not seem to work with webmail. My account number is 96993613\r\n\r\n',
                'dateCreated': '2017-11-28T12:11:03',
                'modifiedBy': 'NZ\\Lizze.Santos',
                'createdBy': 'NZ\\Lizze.Santos',
                'noteCode': {
                    'description': 'Email/Client/MySlingshot',
                    'code': '6058',
                    'category': {
                        'description': 'Trouble Shooting',
                        'parentCategory': {
                            'description': 'Contact Centre',
                            'parentCategory': null
                        }
                    }
                }
            },
            {
                'accountCode': '96993613',
                // tslint:disable-next-line:max-line-length
                'noteContent': 'Nimesh -v\r\n\r\ncust is unable to access internet on mobile phone (Samsung) since number was ported.\r\nWould like to speak to someone from Tech Team\r\nXfer Cust\r\n\r\nCust Happy',
                'dateCreated': '2017-11-29T16:55:17',
                'modifiedBy': 'NZ\\Maria.Fidow',
                'createdBy': 'NZ\\Maria.Fidow',
                'noteCode': {
                    'description': 'Transferred Call',
                    'code': '1505',
                    'category': {
                        'description': 'Maintenance',
                        'parentCategory': {
                            'description': 'Contact Centre',
                            'parentCategory': null
                        }
                    }
                }
            },
            {
                'accountCode': '96993613',
                // tslint:disable-next-line:max-line-length
                'noteContent': 'Nimesh Yogesh Trivedi v\r\n\r\n\r\ncust enquiring about mobile data, cust not able to access it\r\n\r\nadv cust his number isn\'t with us\r\n\r\ncut understands\r\n\r\neoc',
                'dateCreated': '2017-11-29T17:01:10',
                'modifiedBy': 'NZ\\IzaKelly.AhChee',
                'createdBy': 'NZ\\IzaKelly.AhChee',
                'noteCode': {
                    'description': 'iTalk, GoTalk, Mobile',
                    'code': '6067',
                    'category': {
                        'description': 'Trouble Shooting',
                        'parentCategory': {
                            'description': 'Contact Centre',
                            'parentCategory': null
                        }
                    }
                }
            },
            {
                'accountCode': '96993613',
                // tslint:disable-next-line:max-line-length
                'noteContent': 'Nimesh Yogesh Trivedi \r\n\r\ncust would like help with webmail password\r\n\r\nadv cust of UN and PW\r\n\r\ncust able to login eoc',
                'dateCreated': '2017-11-29T17:05:01',
                'modifiedBy': 'NZ\\IzaKelly.AhChee',
                'createdBy': 'NZ\\IzaKelly.AhChee',
                'noteCode': {
                    'description': 'Wrong account opened',
                    'code': '131',
                    'category': {
                        'description': 'Maintenance',
                        'parentCategory': {
                            'description': 'Contact Centre',
                            'parentCategory': null
                        }
                    }
                }
            },
            {
                'accountCode': '96993613',
                // tslint:disable-next-line:max-line-length
                'noteContent': 'New credit requested to account. \r\n\r\n Amount: $8.6957(Ex GST)\r\nCategory: Homeline -> ETF Reversal -> Quality of Service\r\nDescription: $10\nHL doesn\'t work - Kain says it can be the internal wiring issue\ncustomer doens\'t want to fix the line because waiting for the Fibre \n5*2 = 10\r\n\r\n[This note has been automatically created by the Credit Approval system.]',
                'dateCreated': '2017-12-05T18:42:22',
                'modifiedBy': 'NZ\\sue.han',
                'createdBy': 'NZ\\sue.han',
                'noteCode': {
                    'description': 'Credit requested by operator',
                    'code': '235',
                    'category': {
                        'description': 'Move / Add / Change',
                        'parentCategory': {
                            'description': 'Customer Service',
                            'parentCategory': null
                        }
                    }
                }
            },
            {
                'accountCode': '96993613',
                // tslint:disable-next-line:max-line-length
                'noteContent': 'New credit applied to account.\n\nAmount: $8.70(Ex GST) \nCategory: Homeline -> ETF Reversal -> Quality of Service\n\n[This note has been automatically created by the Credit Approval system.]',
                'dateCreated': '2017-12-05T18:42:22',
                'modifiedBy': 'NZ\\sue.han',
                'createdBy': 'NZ\\sue.han',
                'noteCode': {
                    'description': 'Credit placed by operator',
                    'code': '201',
                    'category': {
                        'description': 'Move / Add / Change',
                        'parentCategory': {
                            'description': 'Customer Service',
                            'parentCategory': null
                        }
                    }
                }
            },
            {
                'accountCode': '96993613',
                // tslint:disable-next-line:max-line-length
                'noteContent': '6/12/2017 12:52:05 p.m. update\r\n=================================\r\nTicket no.: 31840640\r\nActioned by: NZ\\LisaW\r\nAction taken: \r\n\r\nalready requested in ticket 31834990\r\n\r\nDec  5 2017  6:49PM TICKET ALLOCATED\r\n=================================\r\nTicket no.: 31840640 \r\nAction type: Forwarded from Slingshot Tolls and Billing to SDR - Copper Other (UBA, VDSL & WSA)\r\nAction required: \r\n\r\nNimesh Yogesh Trivedi(v)\r\n\r\ncust asking for the mobile porting \r\ncust done that 3 weeks ago \r\nMade a request again\r\nadvs it will take 2- 4 w hours\r\n\r\ncust asking for the credit for double bill \r\nadvs I can\'t help with that \r\n\r\ncust said HL doesn\'t work\r\nKain advs it looks like  internel issue\r\n\r\ncust doesnt want to fix \r\n\r\nadvs porting number has been cancelled because we haven\'t given the account number \r\ncust said he provided 31/10\r\nprevious agent missed to update\r\n\r\ncust doesn\'t need a modem\r\nmade a request for the return bag \r\n\r\n-----------\r\nmobile \r\n1970\r\n02041356863\r\nSpark \r\naccount \r\n209621169\r\n0212426410\r\n--------------------\r\nHi team\r\nCould you make a IPMS porting order again?\r\nAccount number : 209621169\r\nprovider :  Spark \r\nThanks \r\n',
                'dateCreated': '2017-12-05T18:49:07',
                'modifiedBy': 'NZ\\svcStarminder',
                'createdBy': 'NZ\\sue.han',
                'noteCode': {
                    'description': 'iTalk, GoTalk, Mobile',
                    'code': '6067',
                    'category': {
                        'description': 'Trouble Shooting',
                        'parentCategory': {
                            'description': 'Contact Centre',
                            'parentCategory': null
                        }
                    }
                }
            },
            {
                'accountCode': '96993613',
                // tslint:disable-next-line:max-line-length
                'noteContent': 'Customer changed plan from SS_access_WVS0_WSA_Unlimited_Feb2016 to SS_access_NGA100/20_SIPATA_Unlimited_Feb2016 on 15 Dec 2017.',
                'dateCreated': '2017-12-15T17:09:55',
                'modifiedBy': 'nz\\svcInternalSales',
                'createdBy': 'nz\\svcInternalSales',
                'noteCode': {
                    'description': 'Move/Add/Change',
                    'code': '200',
                    'category': {
                        'description': 'Service Changes',
                        'parentCategory': {
                            'description': 'IT',
                            'parentCategory': null
                        }
                    }
                }
            },
            {
                'accountCode': '96993613',
                'noteContent': 'New iTalk line 099742957 (Homeline) created. ',
                'dateCreated': '2017-12-15T17:12:05',
                'modifiedBy': 'VOCUS\\Kain.Jiang',
                'createdBy': 'VOCUS\\Kain.Jiang',
                'noteCode': {
                    'description': 'Upgrading/Changing iTalk',
                    'code': '997',
                    'category': {
                        'description': 'Move / Add / Change',
                        'parentCategory': {
                            'description': 'Customer Service',
                            'parentCategory': null
                        }
                    }
                }
            },
            {
                'accountCode': '96993613',
                // tslint:disable-next-line:max-line-length
                'noteContent': 'Nimesh Yogesh Trivedi -v-\r\n\r\ncust is enq roaming mobile add-ons and if it was worth it for going to India\r\nadv cust my recommendation is to buy a sim card over in india as it\'s a lot cheaper\r\ncust understands\r\nEOC',
                'dateCreated': '2017-12-22T17:45:57',
                'modifiedBy': 'NZ\\Scott-Warren.Brown',
                'createdBy': 'NZ\\Scott-Warren.Brown',
                'noteCode': {
                    'description': 'iTalk, GoTalk, Mobile',
                    'code': '6067',
                    'category': {
                        'description': 'Trouble Shooting',
                        'parentCategory': {
                            'description': 'Contact Centre',
                            'parentCategory': null
                        }
                    }
                }
            },
            {
                'accountCode': '96993613',
                // tslint:disable-next-line:max-line-length
                'noteContent': 'Nimesh Yogesh Trivedi  V\r\n\r\ncust adv he has no net access.\r\n\r\ncust has ONT powered OFF.\r\n\r\nadv cust to reboot, cust has service, connected and browsing.\r\nEOC',
                'dateCreated': '2018-02-26T19:35:15',
                'modifiedBy': 'VOCUS\\Rachel.Davis',
                'createdBy': 'VOCUS\\Rachel.Davis',
                'noteCode': {
                    'description': 'UFB Broadband Fault',
                    'code': '6066',
                    'category': {
                        'description': 'Trouble Shooting',
                        'parentCategory': {
                            'description': 'Contact Centre',
                            'parentCategory': null
                        }
                    }
                }
            }
        ];

        const retData = new Observable<Array<Note>>
            (
            observer => {
                setTimeout(() => {
                    observer.next(<Array<Note>> retValue);
                }, 500);
                setTimeout(() => {
                    observer.complete();
                }, 1000);
            }
            );
        return retData;
        // return Observable.of(retValue);
        // return retValue;
    }
}
