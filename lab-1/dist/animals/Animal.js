export class Animal {
    constructor(name, type, hunger = 0) {
        this.name = name;
        this.type = type;
        this._hunger = 0;
        this.hunger = hunger;
    }
    get size() {
        return this.type.size;
    }
    get diet() {
        return this.type.diet;
    }
    get hunger() {
        return this._hunger;
    }
    set hunger(value) {
        if (value < 0)
            throw Error("Hunger can't be negative");
        this._hunger = value;
    }
    entertain() {
        if (this.type.entertainmentCostInCalories / 2 < this.hunger) {
            console.log(`${this} is too hungry!`);
            return;
        }
        this.hunger += this.type.entertainmentCostInCalories;
        console.log(`${this} entertains the audience`);
    }
    feed(food) {
        if (!this.diet.contains(food.foodType))
            throw Error(`${this} can't eat ${food}!`);
        console.log(`${this} is eating ${food} (${food.calories} calories)`);
        this.hunger -= Math.min(this.hunger, food.calories);
    }
    feedAssortment(foods) {
        for (let food of foods) {
            this.feed(food);
        }
    }
    displayHunger() {
        if (!this.hunger) {
            console.log(`${this} is not hungry!`);
            return;
        }
        console.log(`${this}'s hunger is equal to ${this.hunger} calories`);
    }
    toString() {
        return `${this.type} ${this.name}`;
    }
    equals(other) {
        return this.name === other.name && this.type.equals(other.type);
    }
}
//# sourceMappingURL=Animal.js.map