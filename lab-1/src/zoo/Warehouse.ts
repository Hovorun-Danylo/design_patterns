
import { ICatalogue } from "../abstract/Catalogue.js";
import { Food, IFood } from "../food/Food.js";
import { IFoodFactory } from "../food/factory/IFactory.js";
import { IFoodType } from "../food/FoodType.js";

export interface IWarehouse {
    addFood(consumable: IFood<any>): void
    pullOut<T extends string>(consumableType: IFoodType<T>, weightInGrams: number): IFood<T>
    getAvailableWeight(consumableType: IFoodType<any>): number
    isAvailable(consumableType: IFoodType<any>): boolean
}

export interface IRestockable {
    restock(factory: IFoodFactory, foodTypes: Iterable<ICatalogue<IFoodType<any>>>): void
}

export class Warehouse implements IWarehouse, IRestockable {
    private stock: Map<IFoodType<any>, IFood<any>> = new Map()

    constructor(factory: IFoodFactory, foodTypes: Iterable<ICatalogue<IFoodType<any>>>) {
        this.restock(factory, foodTypes)
    }

    addFood(consumable: IFood<any>) {
        if (this.stock.has(consumable.foodType)) {
            const existingConsumable = this.stock.get(consumable.foodType)!
            existingConsumable.weightInGrams += consumable.weightInGrams

            return
        }

        this.stock.set(consumable.foodType, consumable)
    }

    pullOut<T extends string>(consumableType: IFoodType<T>, weightInGrams: number): IFood<T> {
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

    getAvailableWeight(consumableType: IFoodType<any>): number {
        if (this.stock.has(consumableType))
            return this.stock.get(consumableType)!.weightInGrams

        return 0;
    }

    isAvailable(consumableType: IFoodType<any>): boolean {
        return Boolean(this.getAvailableWeight(consumableType))
    }

    restock(factory: IFoodFactory, foodTypes: Iterable<ICatalogue<IFoodType<any>>>) {
        for (let catalogue of foodTypes) {
            for (let foodType of Object.values(catalogue.items)) {
                let food = factory.create(foodType)
                this.addFood(food)
            }
        }
    }
}
