
import { IComparable } from "../abstract/IComparable.js";

export interface IAnimalSize<T extends string> extends IComparable<IAnimalSize<T>> {
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
