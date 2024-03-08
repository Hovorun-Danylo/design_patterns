import { Console } from "../abstract/Console.js";
export class Zoo {
    get animals() { return this.registerMap["animal"]; }
    get enclosures() { return this.registerMap["enclosure"]; }
    get employees() { return this.registerMap["employee"]; }
    constructor(warehouse) {
        this.warehouse = warehouse;
        this.registerMap = {
            "animal": new Set(),
            "enclosure": new Set(),
            "employee": new Set(),
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
        Console.printBlock(`Zoo ${key}s:`, this.registerMap[key]);
    }
    restock(factory, foodTypes) {
        this.warehouse.restock(factory, foodTypes);
    }
}
//# sourceMappingURL=Zoo.js.map