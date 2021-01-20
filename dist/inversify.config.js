"use strict";
//04. Criando e Configurando Container
Object.defineProperty(exports, "__esModule", { value: true });
var inversify_1 = require("inversify");
var types_1 = require("./types");
var entities_1 = require("./entities");
var container = new inversify_1.Container();
container.bind(types_1.default.IWarrior).to(entities_1.Ninja);
container.bind(types_1.default.IWeapon1).to(entities_1.Katana);
container.bind(types_1.default.IWeapon2).to(entities_1.Knife);
container.bind(types_1.default.IThrowableWeapon).to(entities_1.Shuriken);
exports.default = container;
