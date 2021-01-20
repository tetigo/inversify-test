//03. Declarando Classes e Dependencias

import { injectable, inject } from 'inversify'
import 'reflect-metadata'
import TYPES from './types'

@injectable()
class Katana implements IWeapon {
    hit() {
        return "cut!";
    }
}

@injectable()
class Knife implements IWeapon {
    hit() {
        return "cut fast!";
    }
}

@injectable()
class Shuriken implements IThrowableWeapon {
    throw() {
        return "hit!";
    }
}

@injectable()
class Ninja implements IWarrior {
    @inject(TYPES.IWeapon1) private _katana: IWeapon
    @inject(TYPES.IThrowableWeapon) private _shuriken: IThrowableWeapon

    fight() { return this._katana.hit() }
    sneak() { return this._shuriken.throw() }
}

export { Ninja, Katana, Shuriken, Knife }
