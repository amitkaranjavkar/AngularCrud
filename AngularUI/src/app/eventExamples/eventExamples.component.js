"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var EventExampleComponent = (function () {
    function EventExampleComponent() {
        this.values = '';
    }
    EventExampleComponent.prototype.onClickMe = function () {
        this.clickedMe = 'You clicked me at ' + new Date().getDate() + '/' + new Date().getMonth() + '/' + new Date().getFullYear();
    };
    EventExampleComponent.prototype.onKey = function (event) {
        this.values += event.target.value + ' | ';
    };
    EventExampleComponent.prototype.ontempKeyUp = function (val) {
        this.values += val + ' | ';
    };
    return EventExampleComponent;
}());
EventExampleComponent = __decorate([
    core_1.Component({
        selector: "event-example",
        templateUrl: "./eventExamples.component.html"
    })
], EventExampleComponent);
exports.EventExampleComponent = EventExampleComponent;
//# sourceMappingURL=eventExamples.component.js.map