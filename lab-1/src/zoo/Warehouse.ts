
import { ICatalogue } from "../abstract/Catalogue.js";
import { IConsumable } from "../food/Food.js";
import { IFoodFactory } from "../food/factory/IFactory.js";
import {IFoodType} from "../food/FoodType.js";

export class Warehouse {
    private stock: Set<IConsumable<any>> = new Set()

    constructor(factory: IFoodFactory, foodTypes: Iterable<ICatalogue<IFoodType<any>>>) {
        for (let catalogue of foodTypes) {
            for (let foodType of Object.values(catalogue.items)) {
                let food = factory.create(foodType);
                this.stock.add(food)
            }
        }
    }
}
