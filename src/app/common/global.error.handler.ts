import { ErrorHandler, Injectable, Injector } from '@angular/core';
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
            console.log({ message, stack: stackString });
        });

        throw error;
    }


}