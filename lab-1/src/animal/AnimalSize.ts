
import { IEquatable } from "../abstract/IEquatable.js";

export interface IAnimalSize<T extends string> extends IEquatable<IAnimalSize<T>> {
    readonly name: T
    readonly size: number
}

export class AnimalSize<T extends string> implements IAnimalSize<T> {
    constructor(readonly name: T, readonly size: number) { }

    toString(): string {
        return this.name
    }

    equals(other: IAnimalSize<T>): boolean {
        return this.name === other.name && this.size === other.size;
    }

    valueOf(): number {
        return this.size
    }
}
