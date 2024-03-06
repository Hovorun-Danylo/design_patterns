
import { IEquatable } from "../abstract/IEquatable.js";
import { IFoodType } from "./FoodType.js";

export interface IFood<T extends string>  {
    readonly foodType: IFoodType<T>
    weightInGrams: number

    readonly calories: number
}

export class Food<T extends string> implements IFood<T>, IEquatable<IFood<T>> {
    constructor(readonly foodType: IFoodType<T>, public weightInGrams: number) { }

    get calories(): number {
        return this.weightInGrams / 100 * this.foodType.calories
    }

    toString(): string {
        return `${this.weightInGrams}g ${this.foodType}`
    }

    equals(other: IFood<T>): boolean {
        return this.weightInGrams === other.weightInGrams && this.foodType.equals(other.foodType);
    }
}
