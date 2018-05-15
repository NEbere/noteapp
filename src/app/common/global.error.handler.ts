import { ErrorHandler, Injectable } from '@angular/core';
import * as StackTrace from 'stacktrace-js';
import { Http, Request, RequestOptions, RequestOptionsArgs, Response, XHRBackend } from "@angular/http"
import { Observable } from "rxjs/Rx"

// operators
import "rxjs/add/operator/catch"
import "rxjs/add/observable/throw"
import "rxjs/add/operator/map"

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

@Injectable()
export class HttpInterceptor extends Http {

    constructor(
        backend: XHRBackend,
        options: RequestOptions,
        public http: Http,
    ) {
        super(backend, options)
    }

    public request(url: string|Request, options?: RequestOptionsArgs): Observable<Response> {
        return super.request(url, options)
            .catch(this.handleError)
    }

    public handleError = (error: Response) => {
        // Any error from HTTP will be logged here.
        console.log(error, 'error from http')
        // Do messaging and error handling here
        return Observable.throw(error)
    }
}