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
require("rxjs/add/operator/map");
var CustomerService = (function () {
    function CustomerService(_http) {
        this._http = _http;
        this.baseApiUrl = "http://localhost:59456/api/customer/";
    }
    CustomerService.prototype.getCustomer = function () {
        // let authHeaders = new Headers();
        // authHeaders.append('Authorization', 'Bearer ' + localStorage.getItem("access_token"));
        //return this._httpUtility.httpRequest("GET",this.baseApiUrl + 'GetCustomers').map((res: HttpEvent<HttpResponse<Customer>>) => res);
        return this._http.get(this.baseApiUrl + 'GetCustomers')
            .map(function (res) { return res; });
    };
    CustomerService.prototype.getCustomerById = function (id) {
        return this._http.get(this.baseApiUrl + "GetCustomerById/" + id)
            .map(function (res) { return res; });
    };
    CustomerService.prototype.deleteCustomer = function (id) {
        return this._http.delete(this.baseApiUrl + "deletecustomer/" + id)
            .map(function (res) { return res; });
    };
    CustomerService.prototype.saveEditedCustomer = function (cust) {
        return this._http.put(this.baseApiUrl + "editcustomer", cust)
            .map(function (res) { return res; });
    };
    CustomerService.prototype.saveCustomer = function (cust) {
        return this._http.post(this.baseApiUrl + "savecustomer", cust)
            .map(function (res) { return res; });
    };
    CustomerService.prototype.searchCustomer = function (query) {
        query = query == null || query == undefined || query == "" ? "" : query;
        return this._http.get(this.baseApiUrl + "SearchCustomers?searchText=" + query)
            .map(function (res) { return res; });
    };
    return CustomerService;
}());
CustomerService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.HttpClient])
], CustomerService);
exports.CustomerService = CustomerService;
//# sourceMappingURL=customer.service.js.map