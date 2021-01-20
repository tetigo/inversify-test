"use strict";
//03. Declarando Classes e Dependencias
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Knife = exports.Shuriken = exports.Katana = exports.Ninja = void 0;
var inversify_1 = require("inversify");
require("reflect-metadata");
var types_1 = require("./types");
var Katana = /** @class */ (function () {
    function Katana() {
    }
    Katana.prototype.hit = function () {
        return "cut!";
    };
    Katana = __decorate([
        inversify_1.injectable()
    ], Katana);
    return Katana;
}());
exports.Katana = Katana;
var Knife = /** @class */ (function () {
    function Knife() {
    }
    Knife.prototype.hit = function () {
        return "cut fast!";
    };
    Knife = __decorate([
        inversify_1.injectable()
    ], Knife);
    return Knife;
}());
exports.Knife = Knife;
var Shuriken = /** @class */ (function () {
    function Shuriken() {
    }
    Shuriken.prototype.throw = function () {
        return "hit!";
    };
    Shuriken = __decorate([
        inversify_1.injectable()
    ], Shuriken);
    return Shuriken;
}());
exports.Shuriken = Shuriken;
var Ninja = /** @class */ (function () {
    function Ninja() {
    }
    Ninja.prototype.fight = function () { return this._katana.hit(); };
    Ninja.prototype.sneak = function () { return this._shuriken.throw(); };
    __decorate([
        inversify_1.inject(types_1.default.IWeapon1),
        __metadata("design:type", Object)
    ], Ninja.prototype, "_katana", void 0);
    __decorate([
        inversify_1.inject(types_1.default.IThrowableWeapon),
        __metadata("design:type", Object)
    ], Ninja.prototype, "_shuriken", void 0);
    Ninja = __decorate([
        inversify_1.injectable()
    ], Ninja);
    return Ninja;
}());
exports.Ninja = Ninja;
