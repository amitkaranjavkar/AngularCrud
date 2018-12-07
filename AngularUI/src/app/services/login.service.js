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
var http_1 = require("@angular/common/http");
var LoginService = (function () {
    function LoginService(_http) {
        this._http = _http;
        this.tokenApiUrl = "http://localhost:59456/token";
        this.grant_type = "password";
    }
    LoginService.prototype.validateLogin = function (userName, password) {
        var data = "username=" + userName + "&password=" + password + "&grant_type=" + this.grant_type;
        return this._http.post(this.tokenApiUrl, data).map(function (res) { return res; });
    };
    return LoginService;
}());
LoginService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.HttpClient])
], LoginService);
exports.LoginService = LoginService;
//# sourceMappingURL=login.service.js.map