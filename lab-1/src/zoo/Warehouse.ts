
import { ICatalogue } from "../abstract/Catalogue.js";
import { IConsumable } from "../food/Food.js";
import { IFoodFactory } from "../food/factory/IFactory.js";
import {IFoodType} from "../food/FoodType.js";

export class Warehouse {
    private stock: Set<IConsumable<any>>

    constructor(factory: IFoodFactory, foodTypes: Iterable<ICatalogue<IFoodType<any>>>) {
        this.stock = new Set(this.evaluateStock(factory, foodTypes))
        console.log(this.stock)
    }

    private evaluateStock(factory: IFoodFactory, foodTypes: Iterable<ICatalogue<IFoodType<any>>>): IConsumable<any>[] {
        const tmpStock: IConsumable<any>[] = []

        for (let catalogue of foodTypes) {
            for (let foodType of Object.values(catalogue.items)) {
                let food = factory.create(foodType)
                let existingFood = this.findFood(tmpStock, food)

                this.updateStock(tmpStock, food, existingFood)
            }
        }

        return tmpStock
    }

    private findFood(stock: Iterable<IConsumable<any>>, consumable: IConsumable<any>): IConsumable<any> | null {
        for (let existingFood of stock) {
            if (existingFood.foodType.equals(consumable.foodType))
                return existingFood;
        }

        return null;
    }

    private updateStock(stock: IConsumable<any>[], consumable: IConsumable<any>, existingConsumable: IConsumable<any> | null) {
        if (existingConsumable == null) {
            stock.push(consumable);
            return
        }

        existingConsumable.weightInGrams += consumable.weightInGrams
    }
}
