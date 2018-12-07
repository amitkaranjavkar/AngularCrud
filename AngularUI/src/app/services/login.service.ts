import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpHeaders //, HttpParams 
       } from '@angular/common/http';

@Injectable()
export class LoginService {

    private tokenApiUrl: string = "http://localhost:59456/token";
    private grant_type: string = "password";
    constructor(private _http: HttpClient) {

    }

    validateLogin(userName: string, password: string) {
        var data = "username=" + userName + "&password=" + password + "&grant_type=" + this.grant_type;
        return this._http.post(this.tokenApiUrl, data).map((res: any) => res);
    }
}