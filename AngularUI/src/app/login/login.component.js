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
var forms_1 = require("@angular/forms");
var router_1 = require("@angular/router");
var login_service_1 = require("../services/login.service");
var LoginComponent = (function () {
    function LoginComponent(formBuilder, _loginService, _router) {
        this.formBuilder = formBuilder;
        this._loginService = _loginService;
        this._router = _router;
        this.errorMessage = "";
        this.isError = false;
        this.loginForm = formBuilder.group({
            userName: ['', forms_1.Validators.required],
            password: ['', forms_1.Validators.required]
        });
    }
    LoginComponent.prototype.ngOnInit = function () {
        if (localStorage.getItem("access_token") != undefined) {
            this._router.navigate(['home']);
        }
    };
    LoginComponent.prototype.checkLogin = function (val) {
        var _this = this;
        if (val.userName != null && val.password != null) {
            this._loginService.validateLogin(val.userName.toLowerCase(), val.password.toLowerCase()).subscribe(function (result) {
                var acccessToken = result.access_token;
                localStorage.setItem("access_token", acccessToken);
                _this._router.navigate(['home']);
            });
        }
        else {
            this.isError = true;
            this.errorMessage = "Invalid username or password. Check your credentials";
        }
    };
    return LoginComponent;
}());
LoginComponent = __decorate([
    core_1.Component({
        selector: 'app-login',
        templateUrl: './login.component.html'
    }),
    __metadata("design:paramtypes", [forms_1.FormBuilder, login_service_1.LoginService, router_1.Router])
], LoginComponent);
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=login.component.js.map