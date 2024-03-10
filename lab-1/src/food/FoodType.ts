
import {IFoodType} from "../interfaces/IFoodType.js";

export class FoodType<T extends string> implements IFoodType<T> {
    constructor(readonly name: T, readonly calories: number) { }

    toString(): string {
        return this.name
    }

    equals(other: IFoodType<string>): boolean {
        return this.name === other.name && this.calories === other.calories;
    }
}
