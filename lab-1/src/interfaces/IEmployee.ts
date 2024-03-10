
import {IFood} from "./IFood.js";
import {IFeedable} from "./IFeedable.js";

export interface IEmployee<T extends string> {
    readonly name: string
    readonly position: T

    feedAnimal(animal: IFeedable, food: Iterable<IFood<any>>): void
}
