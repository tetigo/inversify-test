//01. Declarando Interfaces

interface IWarrior{
    fight(): string;
    sneak(): string;
}

interface IWeapon{
    hit(): string;
}

interface IThrowableWeapon{
    throw(): string;
}