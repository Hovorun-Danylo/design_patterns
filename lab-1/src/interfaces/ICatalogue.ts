
import {IComparable} from "../abstract/IComparable.js";
import {Catalogue} from "../abstract/Catalogue.js";

export interface ICatalogue<T extends IComparable<T>> extends IComparable<ICatalogue<T>> {
    contains(item: T): boolean
    items: ItemsType<T>
}

export type ItemsType<T extends IComparable<T>> = Record<string, T>
export type LiteralCatalogue<T extends IComparable<T>, K extends ItemsType<T>> = Catalogue<T, K> & K;
