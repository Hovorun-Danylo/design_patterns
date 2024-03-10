import { Random } from "../../abstract/Random.js";
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
        return new Food(foodType, Random.getRandomInt(this.min, this.max));
    }
}
//# sourceMappingURL=RandomFoodFactory.js.map