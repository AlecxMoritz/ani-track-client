import { Injectable } from '@angular/core';
import {
    HttpInterceptor,
    HttpRequest,
    HttpHandler,
    HttpEvent,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { TokenService } from '../services/token.service';

@Injectable()

export class TokenAuthInterceptor implements HttpInterceptor {
    constructor(
        private tokenService: TokenService
    ) { }

    intercept(request: HttpRequest<any>, next: HttpHandler) : Observable<HttpEvent<any>> | any {
        const token = this.tokenService.getToken();
        
        if(token !== undefined) {
            request = request.clone({
                headers: request.headers.set('Authorization', token)
            })
        }

        return next.handle(request).pipe(
            map((event: HttpEvent<any>) => {
                // if(event instanceof HttpResponse) {
                //     console.log('Event =>', event);
                // }
                return event;
            })
            
        )
    }
}