"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var forms_1 = require("@angular/forms");
//import { HttpModule } from '@angular/http';
var router_1 = require("@angular/router");
var customername_pipe_1 = require("./pipe/customername.pipe");
var app_component_1 = require("./app.component");
var customer_component_1 = require("./customers/customer.component");
var customer_service_1 = require("./services/customer.service");
var about_component_1 = require("./about/about.component");
var home_component_1 = require("./home/home.component");
var contact_component_1 = require("./contact/contact.component");
var pager_service_1 = require("./services/pager.service");
var login_component_1 = require("./login/login.component");
var loader_component_1 = require("./loader/loader.component");
var login_guard_service_1 = require("./services/login-guard.service");
var login_service_1 = require("./services/login.service");
var http_1 = require("@angular/common/http");
var auth_interceptor_1 = require("./authInterceptor/auth.interceptor");
var eventExamples_component_1 = require("./eventExamples/eventExamples.component");
var routes = [
    { path: 'customer', component: customer_component_1.CustomerComponent, canActivate: [login_guard_service_1.LoginGuardService] },
    { path: 'about', component: about_component_1.AboutComponent, canActivate: [login_guard_service_1.LoginGuardService] },
    { path: 'home', component: home_component_1.HomeComponent, canActivate: [login_guard_service_1.LoginGuardService] },
    { path: 'contact', component: contact_component_1.ContactComponent, canActivate: [login_guard_service_1.LoginGuardService] },
    { path: 'login', component: login_component_1.LoginComponent },
    { path: 'events', component: eventExamples_component_1.EventExampleComponent },
    { path: '', redirectTo: 'customer', pathMatch: 'full' },
];
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [
            platform_browser_1.BrowserModule,
            forms_1.FormsModule,
            //HttpModule, 
            router_1.RouterModule.forRoot(routes),
            forms_1.ReactiveFormsModule,
            http_1.HttpClientModule
        ],
        declarations: [
            app_component_1.AppComponent,
            customer_component_1.CustomerComponent,
            about_component_1.AboutComponent,
            home_component_1.HomeComponent,
            contact_component_1.ContactComponent,
            customername_pipe_1.CustomerNamePipe,
            login_component_1.LoginComponent,
            loader_component_1.LoaderComponent,
            eventExamples_component_1.EventExampleComponent
        ],
        bootstrap: [app_component_1.AppComponent],
        providers: [
            pager_service_1.PagerService,
            login_guard_service_1.LoginGuardService,
            login_service_1.LoginService,
            customer_service_1.CustomerService,
            {
                provide: http_1.HTTP_INTERCEPTORS,
                useClass: auth_interceptor_1.AuthInterceptor,
                multi: true
            }
        ]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map