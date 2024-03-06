
import { IFoodFactory } from "./IFactory.js";
import { IFoodType } from "../FoodType.js";
import { Food, IConsumable } from "../Food.js";

export class RandomFoodFactory implements IFoodFactory {
    constructor(readonly min: number, readonly max: number) {
        if (min > max) {
            [this.min, this.max] = [max, min]
        }
    }

    create<T extends string>(foodType: IFoodType<T>): IConsumable<T> {
        return new Food(foodType, this.getRandomInt(this.min, this.max))
    }

    private getRandomInt(min: number, max: number): number {
        return Math.floor(Math.random() * (max - min + 1)) + min
    }
}
