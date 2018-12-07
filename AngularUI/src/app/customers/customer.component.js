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
var customer_service_1 = require("../services/customer.service");
var pager_service_1 = require("../services/pager.service");
var router_1 = require("@angular/router");
var customer_1 = require("../models/customer");
var CustomerComponent = (function () {
    function CustomerComponent(_custService, _pager, _router) {
        this._custService = _custService;
        this._pager = _pager;
        this._router = _router;
        this.message = "";
        this.buttonText = 'Save';
        this.display = 'none';
        this.popUpTitle = '';
        // pager object
        this.pager = {};
        this.searchText = null;
        this.isLoading = false;
    }
    CustomerComponent.prototype.ngOnInit = function () {
        this.getCustomersList();
    };
    CustomerComponent.prototype.editCustomer = function (id) {
        var _this = this;
        this.isLoading = true;
        this._custService.getCustomerById(id).subscribe(function (res) {
            _this.customer = res;
            _this.popUpTitle = 'Edit Customer';
            _this.display = 'block';
            _this.isLoading = false;
        });
        this.buttonText = 'Update';
    };
    CustomerComponent.prototype.deleteCustomer = function (id) {
        var _this = this;
        var result = confirm('Do you want to delete this user?');
        if (result) {
            this.isLoading = true;
            this._custService.deleteCustomer(id).subscribe(function (res) {
                _this.message = res;
                _this.getCustomersList();
                _this.isLoading = false;
            });
        }
    };
    CustomerComponent.prototype.saveCustomer = function () {
        var _this = this;
        this.display = 'none';
        this.isLoading = true;
        this.customer.isDeleted = false;
        this.buttonText == "Update" ?
            this._custService.saveEditedCustomer(this.customer)
                .subscribe(function (res) {
                _this.message = res;
                _this.getCustomersList();
                _this.isLoading = false;
            }) :
            this._custService.saveCustomer(this.customer)
                .subscribe(function (res) {
                _this.message = res;
                _this.getCustomersList();
                _this.isLoading = false;
            });
    };
    CustomerComponent.prototype.clearControls = function () {
        this.customer = null;
    };
    CustomerComponent.prototype.getCustomersList = function () {
        var _this = this;
        this.isLoading = true;
        //this.customers = this._custService.getCustomer();
        this._custService.getCustomer().subscribe(function (res) {
            _this.customers = res;
            _this.setPage(1);
            _this.isLoading = false;
        });
    };
    CustomerComponent.prototype.addCustomer = function () {
        this.display = 'block';
        this.popUpTitle = 'Add Customer';
        this.buttonText = 'Save';
        this.customer = new customer_1.Customer();
    };
    CustomerComponent.prototype.onCloseHandled = function () {
        this.display = 'none';
        this.customer = new customer_1.Customer();
    };
    CustomerComponent.prototype.searchCustomers = function () {
        var _this = this;
        this.isLoading = true;
        return this._custService.searchCustomer(this.searchText).subscribe(function (res) {
            _this.customers = res;
            _this.setPage(1);
            _this.isLoading = false;
        });
    };
    CustomerComponent.prototype.setPage = function (page) {
        var pageSize = 5;
        // get pager object from service
        this.pager = this._pager.getPager(this.customers.length, page, pageSize);
        // get current page of items
        this.pagedItems = this.customers.slice(this.pager.startIndex, this.pager.endIndex + 1);
    };
    return CustomerComponent;
}());
CustomerComponent = __decorate([
    core_1.Component({
        selector: 'app-customer',
        templateUrl: './customer.component.html',
        styles: ["\n    .backdrop\n    { \n        background-color:rgba(0,0,0,0.6);              \n        position:fixed;                \n        top:0;                \n        left:0;\n        width:100%;\n        height:100vh;\n        z-index:9;        \n    }"]
    }),
    __metadata("design:paramtypes", [customer_service_1.CustomerService, pager_service_1.PagerService, router_1.Router])
], CustomerComponent);
exports.CustomerComponent = CustomerComponent;
//# sourceMappingURL=customer.component.js.map