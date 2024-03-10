
import {IFoodType} from "../../interfaces/IFoodType.js";
import {Food} from "../Food.js";


export interface IFoodFactory {
    create<T extends string>(foodType: IFoodType<T>): Food<T>
}
