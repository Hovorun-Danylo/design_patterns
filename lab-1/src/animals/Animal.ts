
import { IComparable } from "../abstract/IComparable.js";
import { IAnimalType } from "./AnimalType.js";
import { IFood } from "../food/Food.js";
import { IAnimalSize } from "./AnimalSize.js";

export interface IAnimal<T extends string> {
    readonly name: string
    readonly type: IAnimalType<T>
    readonly size: IAnimalSize<any>
}

export interface IFeedable {
    hunger: number

    feed(food: IFood<any>): void
    feedAssortment(foods: Iterable<IFood<any>>): void
    displayHunger(): void
}

export interface IEntertainable {
    entertain(): void
}

export class Animal<T extends string> implements IAnimal<T>, IFeedable, IEntertainable, IComparable<IAnimal<T>> {
    private _hunger: number = 0

    constructor(
        readonly name: string,
        readonly type: IAnimalType<T>,
        hunger: number = 0
    ) {
        this.hunger = hunger
    }

    get size() {
        return this.type.size
    }

    get hunger(): number {
        return this._hunger
    }

    set hunger(value: number) {
        if (value < 0)
            throw Error("Hunger can't be negative")

        this._hunger = value
    }

    entertain() {
        if (this.type.entertainmentCostInCalories / 2 < this.hunger)
            throw Error(`${this} is too hungry!`)

        this.hunger += this.type.entertainmentCostInCalories
        console.log(`${this} entertains the audience`)
    }

    feed(food: IFood<any>) {
        if (!this.type.diet.contains(food.foodType)) 
            throw Error(`${this} can't eat ${food}!`)

        console.log(`${this} is eating ${food} (${food.calories} calories)`)
        this.hunger -= Math.min(this.hunger, food.calories)
    }

    feedAssortment(foods: Iterable<IFood<any>>) {
        for (let food of foods) {
            this.feed(food)
        }
    }

    displayHunger() {
        if (!this.hunger) {
            console.log(`${this} is not hungry!`)
            return
        }

        console.log(`${this}'s hunger is equal to ${this.hunger} calories`)
    }

    toString(): string {
        return `${this.type} ${this.name}`
    }

    equals(other: IAnimal<T>): boolean {
        return this.name === other.name && this.type.equals(other.type);
    }
}
