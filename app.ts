//05. Resolvendo Dependencias

import container from './inversify.config'
import TYPES from './types'

const ninja = container.get<IWarrior>(TYPES.IWarrior)

console.log('ninja.fight-->', ninja.fight())
console.log('ninja.sneak-->', ninja.sneak())


const arma = container.get<IWeapon>(TYPES.IWeapon2)
console.log('arma-->', arma.hit())