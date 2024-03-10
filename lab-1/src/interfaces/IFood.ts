
import {IFoodType} from "./IFoodType.js";

export interface IFood<T extends string>  {
    readonly foodType: IFoodType<T>
    weightInGrams: number

    readonly calories: number
}
