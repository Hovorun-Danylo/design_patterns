
import { IAnimal } from "../animal/Animal.js";

let nextCageId = 0

export interface ISetContainer<T> {
    items: ReadonlySet<T>
    readonly capacity: number

    add(item: T): void

    remove(item: T): void
    showItems(): void
}

export class Enclosure<T extends string> implements ISetContainer<IAnimal<T>> {
    readonly id
    private _animals: Set<IAnimal<T>> = new Set()

    public constructor(
        readonly capacity: number,
        animals: Iterable<IAnimal<T>> = []
    ) {
        for (let animal of animals) {
            this.add(animal)
        }

        this.id = nextCageId++
    }

    get items(): ReadonlySet<IAnimal<T>> {
        return this._animals
    }

    add(animal: IAnimal<T>) {
        if (this.items.size === this.capacity) {
            throw Error(`Cage ${this.id} is full!`)
        }

        if (this.items.has(animal)) {
            throw Error(`${animal} is already in this cage!`)
        }

        this._animals.add(animal)
    }

    remove(animal: IAnimal<T>) {
        if (!this._animals.has(animal)) {
            throw Error(`${animal} is not present in cage ${this.id}!`)
        }

        this._animals.delete(animal)
    }

    showItems() {
        if (this.items.size == 0) {
            console.log(`${this} is empty!`)
            return
        }

        console.log(`${this} inhabitants:`)
        this.items.forEach(animal => console.log(`${animal}`))
        console.log("-".repeat(50))
    }

    toString(): string {
        return `Cage ${this.id}`
    }
}
