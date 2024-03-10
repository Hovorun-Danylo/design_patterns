
import {IAnimalType} from "../interfaces/IAnimalType.js";
import {IFoodType} from "../interfaces/IFoodType.js";
import {ICatalogue} from "../interfaces/ICatalogue.js";
import {IAnimalSize} from "../interfaces/IAnimalSize.js";

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
