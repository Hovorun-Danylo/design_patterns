import { Animal } from "../animals/Animal.js";
import { HerbivoreSpecies, OmnivoreFood } from "../config.js";
import { Food } from "../food/Food.js";
import { Enclosure } from "../enclosure/Enclosure.js";
import { Employee } from "../employee/Employee.js";
export class Zoo {
    constructor(warehouse) {
        this.warehouse = warehouse;
        this.animals = new Set();
        this.enclosures = new Set();
        this.employees = new Set();
        this.registerMap = new Map([
            ["animal", this.animals],
            ["enclosure", this.enclosures],
            ["employee", this.employees],
        ]);
    }
    register(entityType, entity) {
        this.registerMap.get(entityType)?.add(entity);
    }
    app() {
        const bob = new Employee("Bob", "Animal Curator");
        this.register("employee", bob);
        const bobik = new Animal("bobik", HerbivoreSpecies.elephant);
        const bobik2 = new Animal("bobik2", HerbivoreSpecies.elephant);
        const hay = new Food(OmnivoreFood.hay, 50);
        const vegetables = new Food(OmnivoreFood.vegetables, 100);
        const enclosure = new Enclosure(2, [bobik, bobik2]);
        const assortment = [hay, vegetables];
        bob.feedAnimal(bobik, assortment);
        enclosure.showInhabitants();
    }
    restock(factory, foodTypes) {
        this.warehouse.restock(factory, foodTypes);
    }
}
//# sourceMappingURL=Zoo.js.map