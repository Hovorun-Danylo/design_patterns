
import { IFoodFactory } from "./IFactory.js";
import { IFoodType } from "../FoodType.js";
import { Food, IFood } from "../Food.js";
import { Random } from "../../abstract/Random.js";

export class RandomFoodFactory implements IFoodFactory {
    constructor(readonly min: number, readonly max: number) {
        if (min > max) {
            [this.min, this.max] = [max, min]
        }
    }

    create<T extends string>(foodType: IFoodType<T>): IFood<T> {
        return new Food(foodType, Random.getRandomInt(this.min, this.max))
    }
}
