
import { IEquatable } from "../abstract/IEquatable.js";

export interface IFoodType<T extends string> extends IEquatable<IFoodType<T>> {
    readonly name: T
    readonly calories: number
}

export class FoodType<T extends string> implements IFoodType<T> {
    constructor(readonly name: T, readonly calories: number) { }

    toString(): string {
        return this.name
    }

    equals(other: IFoodType<T>): boolean {
        return this.name === other.name && this.calories === other.calories;
    }
}
