import { Console } from "../abstract/Console.js";
export class Zoo {
    constructor(warehouse) {
        this.warehouse = warehouse;
        this.animals = new Set();
        this.enclosures = new Set();
        this.employees = new Set();
        this.registerMap = {
            "animal": this.animals,
            "enclosure": this.enclosures,
            "employee": this.employees,
        };
    }
    register(entityType, entity) {
        this.registerMap[entityType].add(entity);
    }
    showInfo(key) {
        if (this.registerMap[key].size == 0) {
            console.log(`No ${key}s registered!`);
            return;
        }
        Console.printBlock(`${key}s:`, this.registerMap[key]);
    }
    restock(factory, foodTypes) {
        this.warehouse.restock(factory, foodTypes);
    }
}
//# sourceMappingURL=Zoo.js.map