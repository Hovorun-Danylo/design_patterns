
import { IAnimal } from "../animals/Animal.js";

let nextEnclosureId = 0

export class Enclosure<T extends string> implements Set<IAnimal<T>>  {
    readonly id
    private _animals: Set<IAnimal<T>> = new Set()
    readonly [Symbol.toStringTag]: string = this._animals[Symbol.toStringTag];

    public constructor(
        readonly capacity: number,
        animals: Iterable<IAnimal<T>> = []
    ) {
        for (let animal of animals) {
            this.add(animal)
        }

        this.id = nextEnclosureId++
    }

    showInhabitants() {
        if (this.size == 0) {
            console.log(`${this} is empty!`)
            return
        }

        console.log(`${this} inhabitants:`)
        this.forEach(animal => console.log(`${animal}`))
        console.log("-".repeat(50))
    }

    get size() {
        return this._animals.size
    }

    [Symbol.iterator](): IterableIterator<IAnimal<T>> {
        return this._animals[Symbol.iterator]();
    }

    add(value: IAnimal<T>): this {
        if (this._animals.size === this.capacity) {
            throw Error(`${this} is full!`)
        }

        this._animals.add(value)
        return this;
    }

    clear(): void {
        this._animals.clear()
    }

    delete(value: IAnimal<T>): boolean {
        return this._animals.delete(value)
    }

    entries(): IterableIterator<[IAnimal<T>, IAnimal<T>]> {
        return this._animals.entries();
    }

    forEach(callbackfn: (value: IAnimal<T>, value2: IAnimal<T>, set: Set<IAnimal<T>>) => void, thisArg?: any): void {
        this._animals.forEach(callbackfn, thisArg)
    }

    has(value: IAnimal<T>): boolean {
        return this._animals.has(value);
    }

    keys(): IterableIterator<IAnimal<T>> {
        return this._animals.keys();
    }

    values(): IterableIterator<IAnimal<T>> {
        return this._animals.values();
    }

    toString(): string {
        return `Enclosure ${this.id}`
    }
}
