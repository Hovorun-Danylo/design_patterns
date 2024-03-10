
import {IComparable} from "../abstract/IComparable.js";

export interface IFoodType<T extends string> extends IComparable<IFoodType<string>> {
    readonly name: T
    readonly calories: number
}
