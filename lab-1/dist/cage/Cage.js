let nextCageId = 0;
export class Cage {
    constructor(capacity, animals = []) {
        this.capacity = capacity;
        this._animals = new Set();
        for (let animal of animals) {
            this.add(animal);
        }
        this.id = nextCageId++;
    }
    get items() {
        return this._animals;
    }
    add(animal) {
        if (this.items.size === this.capacity) {
            throw Error(`Cage ${this.id} is full!`);
        }
        if (this.items.has(animal)) {
            throw Error(`${animal} is already in this cage!`);
        }
        this._animals.add(animal);
    }
    remove(animal) {
        if (!this._animals.has(animal)) {
            throw Error(`${animal} is not present in cage ${this.id}!`);
        }
        this._animals.delete(animal);
    }
    showItems() {
        if (this.items.size == 0) {
            console.log(`${this} is empty!`);
            return;
        }
        console.log(`${this} inhabitants:`);
        this.items.forEach(animal => console.log(`${animal}`));
        console.log("-".repeat(50));
    }
    toString() {
        return `Cage ${this.id}`;
    }
}
//# sourceMappingURL=Cage.js.map