
import {IComparable} from "../abstract/IComparable.js";
import {IFoodType} from "./IFoodType.js";
import {ICatalogue} from "./ICatalogue.js";
import {IAnimalSize} from "./IAnimalSize.js";

export interface IAnimalType<T extends string> extends IComparable<IAnimalType<T>> {
    readonly type: T
    readonly diet: ICatalogue<IFoodType<any>>
    readonly entertainmentCostInCalories: number
    readonly size: IAnimalSize<any>
}
