"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
require("rxjs/add/operator/do");
var router_1 = require("@angular/router");
var AuthInterceptor = (function () {
    function AuthInterceptor(router) {
        this.router = router;
    }
    AuthInterceptor.prototype.intercept = function (req, next) {
        var _this = this;
        if (req.headers.get('No-Auth') == "True") {
            return next.handle(req.clone());
        }
        if (req.body != undefined && req.body != null) {
            if (req.body.indexOf('grant_type') > 1) {
                var request = req.clone({
                    setHeaders: {
                        'Content-Type': 'application/x-www-form-urlencoded'
                    }
                });
                return next.handle(request)
                    .do(function (succ) { }, function (err) {
                    if (err.status === 401) {
                        _this.redirectToLogin();
                    }
                });
            }
        }
        if (localStorage.getItem('access_token') != null) {
            var clonedreq = req.clone({
                setHeaders: {
                    "Authorization": "Bearer " + localStorage.getItem('access_token')
                }
            });
            return next.handle(clonedreq)
                .do(function (succ) { }, function (err) {
                if (err.status === 401) {
                    _this.redirectToLogin();
                }
            });
        }
        else {
            this.redirectToLogin();
        }
    };
    AuthInterceptor.prototype.redirectToLogin = function () {
        localStorage.removeItem('access_token');
        this.router.navigateByUrl('/login');
    };
    return AuthInterceptor;
}());
AuthInterceptor = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [router_1.Router])
], AuthInterceptor);
exports.AuthInterceptor = AuthInterceptor;
//# sourceMappingURL=auth.interceptor.js.map