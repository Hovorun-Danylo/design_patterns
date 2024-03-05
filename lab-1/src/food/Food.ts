
import { IEquatable } from "../abstract/IEquatable.js";
import { IFoodType } from "./FoodType.js";

export interface IConsumable<T extends string>  {
    readonly foodType: IFoodType<T>
    readonly weightInGrams: number

    readonly calories: number
}

export class Food<T extends string> implements IConsumable<T>, IEquatable<IConsumable<T>> {
    constructor(readonly foodType: IFoodType<T>, readonly weightInGrams: number) { }

    get calories(): number {
        return this.weightInGrams / 100 * this.foodType.calories
    }
    
    toString(): string {
        return `${this.weightInGrams}g ${this.foodType}`
    }

    equals(other: IConsumable<T>): boolean {
        return this.weightInGrams === other.weightInGrams && this.foodType.equals(other.foodType);
    }
}
