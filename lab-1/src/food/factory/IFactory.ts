
import { IFoodType } from "../FoodType.js";
import { IFood } from "../Food.js";

export interface IFoodFactory {
    create<T extends string>(foodType: IFoodType<T>): IFood<T>
}
