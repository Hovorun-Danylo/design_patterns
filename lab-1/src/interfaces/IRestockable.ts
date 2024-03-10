
import {IFoodFactory} from "../food/factory/IFactory.js";
import {getFoodTypes} from "../abstract/types.js";
import {ICatalogue} from "./ICatalogue.js";

export interface IRestockable<L extends string> {
    restock(factory: IFoodFactory, foodTypes: ICatalogue<getFoodTypes<L>>): void
}
