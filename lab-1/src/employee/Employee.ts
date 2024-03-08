
import { IFood } from "../food/Food.js";
import { IFeedable } from "../animals/Animal.js";

export interface IEmployee<T extends string> {
    readonly name: string
    readonly position: T

    feedAnimal(animal: IFeedable, food: Iterable<IFood<any>>): void
}

export class Employee<T extends string> implements IEmployee<T> {
    constructor(readonly name: string, readonly position: T) { }

    feedAnimal(animal: IFeedable, food: Iterable<IFood<any>>) {
        animal.feedAssortment(food)
    }

    toString(): string {
        return `Employee: ${this.name}: ${this.position}`
    } 
}
