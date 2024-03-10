
import {IAnimalType} from "./IAnimalType.js";
import {IAnimalSize} from "./IAnimalSize.js";
import {IFoodType} from "./IFoodType.js";
import {ICatalogue} from "./ICatalogue.js";

export interface IAnimal<T extends string> {
    readonly name: string
    readonly type: IAnimalType<T>
    readonly size: IAnimalSize<any>
    readonly diet: ICatalogue<IFoodType<any>>
}
