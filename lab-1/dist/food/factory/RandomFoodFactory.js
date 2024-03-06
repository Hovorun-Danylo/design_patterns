import { Food } from "../Food.js";
export class RandomFoodFactory {
    constructor(min, max) {
        this.min = min;
        this.max = max;
        if (min > max) {
            [this.min, this.max] = [max, min];
        }
    }
    create(foodType) {
        return new Food(foodType, this.getRandomInt(this.min, this.max));
    }
    getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
}
//# sourceMappingURL=RandomFoodFactory.js.map