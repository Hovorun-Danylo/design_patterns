
import { IFoodFactory } from "./IFactory.js";
import { IFoodType } from "../FoodType.js";
import { Food, IConsumable } from "../Food.js";

export class RandomFoodFactory implements IFoodFactory {
    create<T extends string>(foodType: IFoodType<T>): IConsumable<T> {
        return new Food(foodType, 50);
    }
}
