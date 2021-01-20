"use strict";
//05. Resolvendo Dependencias
Object.defineProperty(exports, "__esModule", { value: true });
var inversify_config_1 = require("./inversify.config");
var types_1 = require("./types");
var ninja = inversify_config_1.default.get(types_1.default.IWarrior);
console.log('ninja.fight-->', ninja.fight());
console.log('ninja.sneak-->', ninja.sneak());
var arma = inversify_config_1.default.get(types_1.default.IWeapon2);
console.log('arma-->', arma.hit());
