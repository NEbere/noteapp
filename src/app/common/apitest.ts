import { Injectable } from "@angular/core"
import { Response, Http } from "@angular/http"
import { Observable } from "rxjs/Rx"
import { map } from 'rxjs/operators';
import { HttpInterceptor } from '../common/global.error.handler'

@Injectable()
export class Rest {

    constructor(
        public http: HttpInterceptor
    ) { }

    init() {
        // Change 2 to 'a' to see the error in the console for the sample API call.
        var test = this.http.get("https://jsonplaceholder.typicode.com/posts/2")
            .subscribe(
                data => {
                    console.log(data)
                },
                err => console.error(err),
                () => console.log('done loading foods')
            )

    }
}
