
import { IRestockable, IWarehouse } from "./Warehouse.js";
import { IAnimal, IEntertainable, IFeedable } from "../animals/Animal.js";
import { IEmployee } from "../employee/Employee.js";
import { IFoodFactory } from "../food/factory/IFactory.js";
import { ICatalogue } from "../abstract/Catalogue.js";
import { getFoodTypes } from "../abstract/types.js";
import { Console } from "../abstract/Console.js";

type EntityTypeMap = {
    animal: IAnimal<any> & IEntertainable & IFeedable;
    enclosure: Set<IAnimal<any>>;
    employee: IEmployee<any>;
};

export class Zoo<T extends string> {
    get animals() { return this.registerMap["animal"] }
    get enclosures() { return this.registerMap["enclosure"] }
    get employees() { return this.registerMap["employee"] }

    private registerMap: { [key in keyof EntityTypeMap]: Set<EntityTypeMap[key]> } = {
        "animal": new Set(),
        "enclosure": new Set(),
        "employee": new Set(),
    }

    constructor(readonly warehouse: IWarehouse<T> & IRestockable<T>) { }

    register<K extends keyof EntityTypeMap>(entityType: K, entity: EntityTypeMap[K]) {
        this.registerMap[entityType].add(entity)
    }

    showInfo<K extends keyof EntityTypeMap>(key: K) {
        if (this.registerMap[key].size == 0) {
            console.log(`No ${key}s registered!`)
            return
        }

        Console.printBlock(`Zoo ${key}s:`, this.registerMap[key])
    }

    restock(factory: IFoodFactory, foodTypes: ICatalogue<getFoodTypes<T>>) {
        this.warehouse.restock(factory, foodTypes)
    }
}
