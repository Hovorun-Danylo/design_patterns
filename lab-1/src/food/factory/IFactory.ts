
import { IFoodType } from "../FoodType.js";
import { IConsumable } from "../Food.js";

export interface IFoodFactory {
    create<T extends string>(foodType: IFoodType<T>): IConsumable<T>
}
