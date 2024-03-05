export class FoodType {
    constructor(name, calories) {
        this.name = name;
        this.calories = calories;
    }
    toString() {
        return this.name;
    }
    equals(other) {
        return this.name === other.name && this.calories === other.calories;
    }
}
//# sourceMappingURL=FoodType.js.map