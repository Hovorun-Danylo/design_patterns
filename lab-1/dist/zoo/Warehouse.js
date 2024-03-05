export class Warehouse {
    constructor(factory, foodTypes) {
        this.stock = new Set();
        for (let catalogue of foodTypes) {
            for (let foodType of Object.values(catalogue.items)) {
                let food = factory.create(foodType);
                this.stock.add(food);
            }
        }
    }
}
//# sourceMappingURL=Warehouse.js.map