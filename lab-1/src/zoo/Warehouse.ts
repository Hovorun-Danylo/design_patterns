
import { ICatalogue } from "../abstract/Catalogue.js";
import { Food, IFood } from "../food/Food.js";
import { IFoodFactory } from "../food/factory/IFactory.js";
import { IFoodType} from "../food/FoodType.js";
import {getFood, getFoodTypes} from "../abstract/types.js";

export interface IWarehouse<L extends string> {
    addFood(consumable: getFood<L>): void
    pullOut<T extends L>(consumableType: IFoodType<T>, weightInGrams: number): Food<T>
    getAvailableWeight(consumableType: getFoodTypes<L>): number
    isAvailable(consumableType: getFoodTypes<L>): boolean
    readonly foodTypes: ICatalogue<getFoodTypes<L>>
}

export interface IRestockable<L extends string> {
    restock(factory: IFoodFactory, foodTypes: ICatalogue<getFoodTypes<L>>): void
}

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
