
import {IFood} from "./IFood.js";

export interface IFeedable {
    hunger: number

    feed(food: IFood<any>): void
    feedAssortment(foods: Iterable<IFood<any>>): void
    displayHunger(): void
}
