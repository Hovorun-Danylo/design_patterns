
import { IComparable } from "../abstract/IComparable.js";
import {IFood} from "../interfaces/IFood.js";
import {IFoodType} from "../interfaces/IFoodType.js";

export class Food<T extends string> implements IFood<T>, IComparable<IFood<T>> {
    private _weightInGrams: number = 0

    constructor(readonly foodType: IFoodType<T>, weightInGrams: number) {
        this.weightInGrams = weightInGrams
    }

    get weightInGrams(): number {
        return this._weightInGrams
    }

    set weightInGrams(other: number) {
        if (other < 0) {
            throw Error("Weight can't be negative!")
        }

        this._weightInGrams = other
    }

    get calories(): number {
        return Math.round(this.weightInGrams / 100 * this.foodType.calories)
    }

    toString(): string {
        return `${this.weightInGrams}g of ${this.foodType}`
    }

    equals(other: IFood<T>): boolean {
        return this.weightInGrams === other.weightInGrams && this.foodType.equals(other.foodType);
    }
}
