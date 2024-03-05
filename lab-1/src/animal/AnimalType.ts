
import { ICatalogue } from "../abstract/Catalogue.js";
import { IEquatable } from "../abstract/IEquatable.js";
import { IFoodType } from "../food/FoodType.js";
import { IAnimalSize } from "./AnimalSize.js";

export interface IAnimalType<T extends string> extends IEquatable<IAnimalType<T>> {
    readonly type: T
    readonly diet: ICatalogue<IFoodType<any>>
    readonly entertainmentCostInCalories: number
    readonly size: IAnimalSize<any>
}

export class AnimalType<T extends string> implements IAnimalType<T> {
    constructor(
        readonly type: T,
        readonly diet: ICatalogue<IFoodType<any>>,
        readonly entertainmentCostInCalories: number,
        readonly size: IAnimalSize<any>
    ) { }

    toString(): string {
        return this.type
    }

    equals(other: IAnimalType<T>): boolean {
        return this.type === other.type && this.diet.equals(other.diet);
    }
}
