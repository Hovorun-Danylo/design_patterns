export class AnimalType {
    constructor(type, diet, entertainmentCostInCalories, size) {
        this.type = type;
        this.diet = diet;
        this.entertainmentCostInCalories = entertainmentCostInCalories;
        this.size = size;
    }
    toString() {
        return this.type;
    }
    equals(other) {
        return this.type === other.type && this.diet.equals(other.diet);
    }
}
//# sourceMappingURL=AnimalType.js.map