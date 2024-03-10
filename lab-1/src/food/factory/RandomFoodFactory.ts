
import { IFoodFactory } from "./IFactory.js";
import { Random } from "../../abstract/Random.js";
import {IFoodType} from "../../interfaces/IFoodType.js";
import {Food} from "../Food.js";

export class RandomFoodFactory implements IFoodFactory {
    constructor(readonly min: number, readonly max: number) {
        if (min > max) {
            [this.min, this.max] = [max, min]
        }
    }

    create<T extends string>(foodType: IFoodType<T>): Food<T> {
        return new Food(foodType, Random.getRandomInt(this.min, this.max))
    }
}
