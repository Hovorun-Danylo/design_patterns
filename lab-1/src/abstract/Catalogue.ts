
import { IEquatable } from "./IEquatable.js";

export interface ICatalogue<T extends IEquatable<T>> extends IEquatable<ICatalogue<T>> {
    contains(item: T): boolean
    items: ItemsType<T>
}

type ItemsType<T extends IEquatable<T>> = Record<string, T>
type LiteralCatalogue<T extends IEquatable<T>, K extends ItemsType<T>> = Catalogue<T, K> & K;

type Constructor<T> = new (...args: any) => T

export class Catalogue<T extends IEquatable<T>, K extends ItemsType<T>> implements ICatalogue<T> {
    private constructor(private _items: K) {
        Object.defineProperty(this, "_items", {
            get: () => _items,
            enumerable: false
        })

        for (const key in this.items) {
            Object.defineProperty(this, key, {
                get: () => this.items[key],
                enumerable: true,
            });
        }
    }

    get items() { return this._items }

    contains(item: T): boolean {
        return Object.values(this.items).some(i => item.equals(i));
    }

    equals(other: ICatalogue<T>): boolean {
        const thisValues = Object.values(this.items) as T[];
        const otherValues = Object.values(other.items) as T[];

        if (thisValues.length !== otherValues.length) {
            return false;
        }

        return thisValues.every((value, i) => value.equals(otherValues[i]));
    }

    static create<T extends IEquatable<T>, K extends ItemsType<T>>
    (itemType: Constructor<T>, items: K): LiteralCatalogue<T, K> {
        return new Catalogue(items) as ICatalogue<T> as LiteralCatalogue<T, K>;
    }
}
