
import { IEquatable } from "../abstract/IEquatable.js";

export interface IAnimalSize<T extends string> extends IEquatable<IAnimalSize<T>> {
    readonly name: T
}

export class AnimalSize<T extends string> implements IAnimalSize<T> {
    constructor(readonly name: T) { }

    toString(): string {
        return this.name
    }

    equals(other: IAnimalSize<T>): boolean {
        return this.name === other.name;
    }
}
