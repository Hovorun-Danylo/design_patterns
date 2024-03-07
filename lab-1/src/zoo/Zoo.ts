
import { IRestockable, IWarehouse } from "./Warehouse.js";
import { Animal, IAnimal } from "../animals/Animal.js";
import { HerbivoreSpecies, OmnivoreFood } from "../config.js";
import { Food } from "../food/Food.js";
import { Enclosure } from "../enclosure/Enclosure.js";
import { Employee, IEmployee } from "../employee/Employee.js";
import { IFoodFactory } from "../food/factory/IFactory.js";
import { ICatalogue } from "../abstract/Catalogue.js";
import { getFoodTypes } from "../abstract/types.js";

type EntityTypeMap = {
    animal: IAnimal<any>;
    enclosure: Set<IAnimal<any>>;
    employee: IEmployee<any>;
};

export class Zoo<T extends string> {
    private animals: Set<IAnimal<any>> = new Set()
    private enclosures: Set<Set<IAnimal<any>>> = new Set()
    private employees: Set<IEmployee<any>> = new Set()

    private registerMap: { [key in keyof EntityTypeMap]: Set<EntityTypeMap[key]> } = {
        "animal": this.animals,
        "enclosure": this.enclosures,
        "employee": this.employees,
    }

    constructor(private warehouse: IWarehouse<T> & IRestockable<T>) { }

    register<K extends keyof EntityTypeMap>(entityType: K, entity: EntityTypeMap[K]) {
        this.registerMap[entityType].add(entity)
    }

    app() {
        const bob = new Employee("Bob", "Animal Curator")
        this.register("employee", bob)

        const bobik = new Animal("bobik", HerbivoreSpecies.elephant)
        const bobik2 = new Animal("bobik2", HerbivoreSpecies.elephant)

        const hay = new Food(OmnivoreFood.hay, 50)
        const vegetables = new Food(OmnivoreFood.vegetables, 100)

        const enclosure = new Enclosure(2, [ bobik, bobik2 ])

        const assortment = [ hay, vegetables ]
        bob.feedAnimal(bobik, assortment)

        enclosure.showInhabitants()
    }

    restock(factory: IFoodFactory, foodTypes: ICatalogue<getFoodTypes<T>>) {
        this.warehouse.restock(factory, foodTypes)
    }
}
