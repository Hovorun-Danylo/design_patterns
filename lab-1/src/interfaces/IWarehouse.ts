
import {getFood, getFoodTypes} from "../abstract/types.js";
import {Food} from "../food/Food.js";
import {IFoodType} from "./IFoodType.js";
import {ICatalogue} from "./ICatalogue.js";

export interface IWarehouse<L extends string> {
    addFood(consumable: getFood<L>): void
    pullOut<T extends L>(consumableType: IFoodType<T>, weightInGrams: number): Food<T>
    getAvailableWeight(consumableType: getFoodTypes<L>): number
    isAvailable(consumableType: getFoodTypes<L>): boolean
    readonly foodTypes: ICatalogue<getFoodTypes<L>>
}
