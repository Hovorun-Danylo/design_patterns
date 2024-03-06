import { Food } from "../food/Food.js";
export class Warehouse {
    constructor(factory, foodTypes) {
        this.stock = new Map();
        this.restock(factory, foodTypes);
    }
    addFood(consumable) {
        if (this.stock.has(consumable.foodType)) {
            const existingConsumable = this.stock.get(consumable.foodType);
            existingConsumable.weightInGrams += consumable.weightInGrams;
            return;
        }
        this.stock.set(consumable.foodType, consumable);
    }
    pullOut(consumableType, weightInGrams) {
        if (weightInGrams <= 0) {
            throw Error("Pulling weight can't be <= 0!");
        }
        const availableWeight = this.getAvailableWeight(consumableType);
        if (availableWeight < weightInGrams) {
            throw Error(`Not enough ${consumableType} in stock!`);
        }
        this.stock.get(consumableType).weightInGrams -= weightInGrams;
        return new Food(consumableType, weightInGrams);
    }
    getAvailableWeight(consumableType) {
        if (this.stock.has(consumableType))
            return this.stock.get(consumableType).weightInGrams;
        return 0;
    }
    isAvailable(consumableType) {
        return Boolean(this.getAvailableWeight(consumableType));
    }
    restock(factory, foodTypes) {
        for (let catalogue of foodTypes) {
            for (let foodType of Object.values(catalogue.items)) {
                let food = factory.create(foodType);
                this.addFood(food);
            }
        }
    }
}
//# sourceMappingURL=Warehouse.js.map