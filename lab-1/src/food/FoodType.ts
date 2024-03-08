
import { IComparable } from "../abstract/IComparable.js";

export interface IFoodType<T extends string> extends IComparable<IFoodType<string>> {
    readonly name: T
    readonly calories: number
}

export class FoodType<T extends string> implements IFoodType<T> {
    constructor(readonly name: T, readonly calories: number) { }

    toString(): string {
        return this.name
    }

    equals(other: IFoodType<string>): boolean {
        return this.name === other.name && this.calories === other.calories;
    }
}
