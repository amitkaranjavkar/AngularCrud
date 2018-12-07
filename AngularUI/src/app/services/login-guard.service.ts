import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable()
export class LoginGuardService implements CanActivate {
    constructor(private _router: Router) {

    }
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        if (localStorage.getItem('access_token') == undefined) {
            this._router.navigate['login'];
            return false;
        }
        else {            
            return true;
        }
    }
}
