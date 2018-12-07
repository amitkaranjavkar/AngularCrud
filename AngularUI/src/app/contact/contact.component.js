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
var url_validator_1 = require("../validators/url.validator");
var email_validator_1 = require("../validators/email.validator");
var ContactComponent = (function () {
    function ContactComponent(fb) {
        this.complexForm = fb.group({
            firstName: ['', forms_1.Validators.required],
            lastName: ['', forms_1.Validators.required],
            email: ['', [forms_1.Validators.email, email_validator_1.ValidateEmail]],
            phone: ['', forms_1.Validators.compose([forms_1.Validators.pattern("[0-9]*"), forms_1.Validators.required])],
            address: [''],
            url: ['', [forms_1.Validators.required, url_validator_1.ValidateUrl]]
        });
    }
    ContactComponent.prototype.saveForm = function (value) {
        //service call
        console.log(value);
    };
    return ContactComponent;
}());
ContactComponent = __decorate([
    core_1.Component({
        selector: 'app-contact',
        templateUrl: './contact.component.html'
    }),
    __metadata("design:paramtypes", [forms_1.FormBuilder])
], ContactComponent);
exports.ContactComponent = ContactComponent;
//# sourceMappingURL=contact.component.js.map