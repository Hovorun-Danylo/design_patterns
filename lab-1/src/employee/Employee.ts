
import {IEmployee} from "../interfaces/IEmployee.js";
import {IFood} from "../interfaces/IFood.js";
import {IFeedable} from "../interfaces/IFeedable.js";



export class Employee<T extends string> implements IEmployee<T> {
    constructor(readonly name: string, readonly position: T) { }

    feedAnimal(animal: IFeedable, food: Iterable<IFood<any>>) {
        animal.feedAssortment(food)
    }

    toString(): string {
        return `Employee: ${this.name}: ${this.position}`
    } 
}
