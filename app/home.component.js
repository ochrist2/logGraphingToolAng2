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
var HomeComponent = (function () {
    function HomeComponent() {
        this.a = 1;
        this.b = 1;
        this.c = 0;
        this.d = 0;
        this.exp = 1;
        this.base = 10;
        this.transformedPointString = "";
        this.finishedPointString = "";
        this.extraString = "";
    }
    HomeComponent.prototype.calculate = function () {
        if (this.base == 'e' || this.base == 'E') {
            this.base = Math.E;
        }
        this.a = parseFloat(this.a);
        this.behold = this.b;
        this.b = 1 / parseFloat(this.b);
        this.c = parseFloat(this.c);
        this.d = parseFloat(this.d);
        this.exp = parseFloat(this.exp);
        this.base = parseFloat(this.base);
        var x = 1;
        var y = 0;
        x = x * this.b + this.c;
        y = y + this.d;
        this.transformedPointString = "Your transformed point is at (" + x + "," + y + ").";
        y = -this.d;
        y = y / (this.exp * this.a);
        y = Math.pow(this.base, y);
        y = y * this.b;
        y = y + this.c;
        y = Math.pow(y, (1 / this.exp));
        this.finishedPointString = "Your  x intercept is " + y + ". Your equation of the asymptote is x = " + this.c + ".";
        if (this.exp % 2 == 0) {
            this.extraString = "Your other x intercept is x = " + (-y);
            this.b = this.behold;
        }
        else {
            this.extraString = "";
        }
    };
    return HomeComponent;
}());
HomeComponent = __decorate([
    core_1.Component({
        selector: 'home',
        template: "\n   <form>\n    A value <input type=\"text\" name=\"a\" [(ngModel)]=\"a\"/>\n    <br/><br/>\n    B value <input type=\"text\" name=\"b\" [(ngModel)]=\"b\"/>\n    <br/><br/>\n    C value <input type=\"text\" name=\"c\" [(ngModel)]=\"c\"/>\n    <br/><br/>\n    D value <input type=\"text\" name=\"d\" [(ngModel)]=\"d\"/>\n    <br/><br/>\n    Exp value <input type=\"text\" name=\"exp\" [(ngModel)]=\"exp\"/>\n    <br/><br/>\n    Base value <input type=\"text\" name=\"base\" [(ngModel)]=\"base\"/>\n    <br/><br/>\n    <button (click)=\"calculate()\">Calculate!</button>\n    <br />\n    {{transformedPointString}}\n    <br />\n    {{finishedPointString}}\n    <br />\n    {{extraString}}\n    <br />\n    </form>\n    ",
    }),
    __metadata("design:paramtypes", [])
], HomeComponent);
exports.HomeComponent = HomeComponent;
//# sourceMappingURL=home.component.js.map