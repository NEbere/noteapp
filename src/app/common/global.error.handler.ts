import { ErrorHandler, Injectable } from '@angular/core';
import * as StackTrace from 'stacktrace-js';

@Injectable()
export class GlobalErrorHandler implements ErrorHandler {
    constructor() { }
    handleError(error) {
        const message = error.message ? error.message : error.toString();
        StackTrace.fromError(error).then(stackframes => {
            const stackString = stackframes
                .splice(0, 20)
                .map(function (sf) {
                    return sf.toString();
                }).join('\n');
            // You can handle the error or pass it to a display here in different ways
            // eg: Alert the error
            // alert(message)
            // console.log(message) to view error message in console
            console.log({ message, stack: stackString });
        });

        throw error;
    }

}