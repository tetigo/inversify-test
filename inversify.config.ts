//04. Criando e Configurando Container

import { Container } from 'inversify'
import TYPES from './types'
import { Ninja, Katana, Shuriken, Knife } from './entities'

const container = new Container()

container.bind<IWarrior>(TYPES.IWarrior).to(Ninja)
container.bind<IWeapon>(TYPES.IWeapon1).to(Katana)
container.bind<IWeapon>(TYPES.IWeapon2).to(Knife)
container.bind<IThrowableWeapon>(TYPES.IThrowableWeapon).to(Shuriken)


export default container;
