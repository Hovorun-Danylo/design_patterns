
import {IComparable} from "../abstract/IComparable.js";

export interface IAnimalSize<T extends string> extends IComparable<IAnimalSize<T>> {
    readonly name: T
}
