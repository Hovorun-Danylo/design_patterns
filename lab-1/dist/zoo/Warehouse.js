export class Warehouse {
    constructor(factory, foodTypes) {
        this.stock = new Set(this.evaluateStock(factory, foodTypes));
        console.log(this.stock);
    }
    evaluateStock(factory, foodTypes) {
        const tmpStock = [];
        for (let catalogue of foodTypes) {
            for (let foodType of Object.values(catalogue.items)) {
                let food = factory.create(foodType);
                let existingFood = this.findFood(tmpStock, food);
                this.updateStock(tmpStock, food, existingFood);
            }
        }
        return tmpStock;
    }
    findFood(stock, consumable) {
        for (let existingFood of stock) {
            if (existingFood.foodType.equals(consumable.foodType))
                return existingFood;
        }
        return null;
    }
    updateStock(stock, consumable, existingConsumable) {
        if (existingConsumable == null) {
            stock.push(consumable);
            return;
        }
        existingConsumable.weightInGrams += consumable.weightInGrams;
    }
}
//# sourceMappingURL=Warehouse.js.map