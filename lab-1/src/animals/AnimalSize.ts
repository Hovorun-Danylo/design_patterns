
import {IAnimalSize} from "../interfaces/IAnimalSize.js";

export class AnimalSize<T extends string> implements IAnimalSize<T> {
    constructor(readonly name: T) { }

    toString(): string {
        return this.name
    }

    equals(other: IAnimalSize<T>): boolean {
        return this.name === other.name;
    }
}
