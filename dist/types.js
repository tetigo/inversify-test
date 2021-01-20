"use strict";
//02. Declaracao de Tipos pra ser usando em Runtime
Object.defineProperty(exports, "__esModule", { value: true });
var TYPES = {
    IWarrior: Symbol("Warrior"),
    IWeapon1: Symbol("Katana"),
    IWeapon2: Symbol("Knife"),
    IThrowableWeapon: Symbol("ThrowableWeapon")
};
exports.default = TYPES;
