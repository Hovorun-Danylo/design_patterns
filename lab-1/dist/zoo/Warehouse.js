export class Warehouse {
    constructor(factory, foodTypes) {
        this.stock = new Set(this.evaluateStock(factory, foodTypes));
    }
    evaluateStock(factory, foodTypes) {
        const tmpStock = new Map();
        for (let catalogue of foodTypes) {
            for (let foodType of Object.values(catalogue.items)) {
                let food = factory.create(foodType);
                this.addFood(tmpStock, food);
            }
        }
        return tmpStock.values();
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