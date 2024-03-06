export class Warehouse {
    constructor(factory, foodTypes) {
        this.stock = new Map();
        this.evaluateStock(factory, foodTypes);
    }
    evaluateStock(factory, foodTypes) {
        for (let catalogue of foodTypes) {
            for (let foodType of Object.values(catalogue.items)) {
                let food = factory.create(foodType);
                this.addFood(this.stock, food);
            }
        }
    }
    addFood(stock, consumable) {
        if (stock.has(consumable.foodType)) {
            const existingConsumable = stock.get(consumable.foodType);
            existingConsumable.weightInGrams += consumable.weightInGrams;
            return;
        }
        stock.set(consumable.foodType, consumable);
    }
}
//# sourceMappingURL=Warehouse.js.map