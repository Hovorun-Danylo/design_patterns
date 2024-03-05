
import { ICatalogue } from "../abstract/Catalogue.js";
import { IConsumable } from "../food/Food.js";
import { IFoodFactory } from "../food/factory/IFactory.js";

export class Warehouse {
    private stock: Set<IConsumable<any>> = new Set()

    constructor(factory: IFoodFactory, catalogues: Iterable<ICatalogue<any>>) {
        for (let catalogue of catalogues) {
            for (let foodType of Object.values(catalogue)) {
                let food = factory.create(foodType);
                console.log(food)
            }
        }
    }
}
