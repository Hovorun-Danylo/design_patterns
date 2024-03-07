
import { ICatalogue } from "./Catalogue.js";
import { IComparable } from "./IComparable.js";

export abstract class Random {
    private constructor() { }

    static getRandomInt(min: number, max: number): number {
        return Math.floor(Math.random() * (max - min + 1)) + min
    }

    static getRandomElement<T>(collection: Iterable<T>): T {
        const items = [...collection]
        return items[this.getRandomInt(0, items.length - 1)]
    }

    static getRandomCatalogueElement<T extends IComparable<T>>(collection: ICatalogue<T>): T {
        const items = Object.values(collection.items)
        return items[this.getRandomInt(0, items.length - 1)]
    }
}
