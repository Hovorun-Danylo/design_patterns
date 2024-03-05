import { Food } from "../Food.js";
export class RandomFoodFactory {
    create(foodType) {
        return new Food(foodType, 50);
    }
}
//# sourceMappingURL=RandomFoodFactory.js.map