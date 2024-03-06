
import { ICatalogue } from "../abstract/Catalogue.js";
import { IConsumable } from "../food/Food.js";
import { IFoodFactory } from "../food/factory/IFactory.js";
import {IFoodType} from "../food/FoodType.js";

export class Warehouse {
    private stock: Map<IFoodType<any>, IConsumable<any>> = new Map()

    constructor(factory: IFoodFactory, foodTypes: Iterable<ICatalogue<IFoodType<any>>>) {
        this.evaluateStock(factory, foodTypes)
    }

    private evaluateStock(factory: IFoodFactory, foodTypes: Iterable<ICatalogue<IFoodType<any>>>) {
        for (let catalogue of foodTypes) {
            for (let foodType of Object.values(catalogue.items)) {
                let food = factory.create(foodType)
                this.addFood(this.stock, food)
            }
        }
    }

    private addFood(stock: Map<IFoodType<any>, IConsumable<any>>, consumable: IConsumable<any>) {
        if (stock.has(consumable.foodType)) {
            const existingConsumable = stock.get(consumable.foodType)!
            existingConsumable.weightInGrams += consumable.weightInGrams

            return
        }

        stock.set(consumable.foodType, consumable)
    }
}
