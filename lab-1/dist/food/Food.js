export class Food {
    constructor(foodType, weightInGrams) {
        this.foodType = foodType;
        this.weightInGrams = weightInGrams;
    }
    get calories() {
        return this.weightInGrams / 100 * this.foodType.calories;
    }
    toString() {
        return `${this.weightInGrams}g ${this.foodType}`;
    }
    equals(other) {
        return this.weightInGrams === other.weightInGrams && this.foodType.equals(other.foodType);
    }
}
//# sourceMappingURL=Food.js.map