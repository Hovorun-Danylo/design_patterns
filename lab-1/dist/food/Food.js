export class Food {
    constructor(foodType, weightInGrams) {
        this.foodType = foodType;
        this._weightInGrams = 0;
        this.weightInGrams = weightInGrams;
    }
    get weightInGrams() {
        return this._weightInGrams;
    }
    set weightInGrams(other) {
        if (other < 0) {
            throw Error("Weight can't be negative!");
        }
        this._weightInGrams = other;
    }
    get calories() {
        return Math.round(this.weightInGrams / 100 * this.foodType.calories);
    }
    toString() {
        return `${this.weightInGrams}g of ${this.foodType}`;
    }
    equals(other) {
        return this.weightInGrams === other.weightInGrams && this.foodType.equals(other.foodType);
    }
}
//# sourceMappingURL=Food.js.map