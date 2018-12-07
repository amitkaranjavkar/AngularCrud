import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';
import { Router } from '@angular/router';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

    constructor(private router: Router) { }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        if (req.headers.get('No-Auth') == "True") {
            return next.handle(req.clone());
        }

        if (req.body != undefined && req.body != null) {
            if (req.body.indexOf('grant_type') > 1) {
                const request = req.clone({
                    setHeaders: {
                        'Content-Type': 'application/x-www-form-urlencoded'
                    }
                });
                return next.handle(request)
                    .do(
                        succ => { },
                        err => {
                            if (err.status === 401) {
                                this.redirectToLogin();
                            }
                        }
                    );
            }
        }

        if (localStorage.getItem('access_token') != null) {
            const clonedreq = req.clone({
                setHeaders: {
                    "Authorization": "Bearer " + localStorage.getItem('access_token')
                }
            });
            return next.handle(clonedreq)
                .do(
                    succ => { },
                    err => {
                        if (err.status === 401) {
                            this.redirectToLogin();
                        }
                    }
                );
        }
        else {
            this.redirectToLogin();
        }
    }    

    private redirectToLogin() {
        localStorage.removeItem('access_token');
        this.router.navigateByUrl('/login');
    }
}