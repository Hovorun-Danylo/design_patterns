
import { Food } from "../food/Food.js";
import { IFoodFactory } from "../food/factory/IFactory.js";
import {getFood, getFoodTypes} from "../abstract/types.js";
import {IWarehouse} from "../interfaces/IWarehouse.js";
import {IRestockable} from "../interfaces/IRestockable.js";
import {ICatalogue} from "../interfaces/ICatalogue.js";
import {IFoodType} from "../interfaces/IFoodType.js";

export class Warehouse<L extends string> implements IWarehouse<L>, IRestockable<L> {
    private stock: Map<getFoodTypes<L>, getFood<L>> = new Map()

    constructor(factory: IFoodFactory, readonly foodTypes: ICatalogue<getFoodTypes<L>>) {
        this.restock(factory, foodTypes)
    }

    addFood(consumable: getFood<L>) {
        if (this.stock.has(consumable.foodType)) {
            const existingConsumable = this.stock.get(consumable.foodType)!
            existingConsumable.weightInGrams += consumable.weightInGrams

            return
        }

        this.stock.set(consumable.foodType, consumable)
    }

    pullOut<T extends L>(consumableType: IFoodType<T>, weightInGrams: number): Food<T> {
        if (weightInGrams <= 0) {
            throw Error("Pulling weight can't be <= 0!")
        }

        const availableWeight = this.getAvailableWeight(consumableType)

        if (availableWeight < weightInGrams) {
            throw Error(`Not enough ${consumableType} in stock!`)
        }

        this.stock.get(consumableType)!.weightInGrams -= weightInGrams
        return new Food(consumableType, weightInGrams)
    }

    getAvailableWeight(consumableType: getFoodTypes<L>): number {
        if (this.stock.has(consumableType))
            return this.stock.get(consumableType)!.weightInGrams

        return 0;
    }

    isAvailable(consumableType: getFoodTypes<L>): boolean {
        return Boolean(this.getAvailableWeight(consumableType))
    }

    restock(factory: IFoodFactory, catalogue: ICatalogue<getFoodTypes<L>>) {
        for (let foodType of Object.values(catalogue.items)) {
            let food = factory.create(foodType)
            this.addFood(food)
        }
    }
}
