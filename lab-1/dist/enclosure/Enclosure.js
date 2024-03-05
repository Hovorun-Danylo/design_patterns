var _a;
let nextEnclosureId = 0;
export class Enclosure {
    constructor(capacity, animals = []) {
        this.capacity = capacity;
        this._animals = new Set();
        this[_a] = this._animals[Symbol.toStringTag];
        for (let animal of animals) {
            this.add(animal);
        }
        this.id = nextEnclosureId++;
    }
    showInhabitants() {
        if (this.size == 0) {
            console.log(`${this} is empty!`);
            return;
        }
        console.log(this[Symbol.toStringTag]);
        console.log(`${this} inhabitants:`);
        this.forEach(animal => console.log(`${animal}`));
        console.log("-".repeat(50));
    }
    get size() {
        return this._animals.size;
    }
    [(_a = Symbol.toStringTag, Symbol.iterator)]() {
        return this._animals[Symbol.iterator]();
    }
    add(value) {
        if (this._animals.size === this.capacity) {
            throw Error(`${this} is full!`);
        }
        this._animals.add(value);
        return this;
    }
    clear() {
        this._animals.clear();
    }
    delete(value) {
        return this._animals.delete(value);
    }
    entries() {
        return this._animals.entries();
    }
    forEach(callbackfn, thisArg) {
        this._animals.forEach(callbackfn, thisArg);
    }
    has(value) {
        return this._animals.has(value);
    }
    keys() {
        return this._animals.keys();
    }
    values() {
        return this._animals.values();
    }
    toString() {
        return `Enclosure ${this.id}`;
    }
}
//# sourceMappingURL=Enclosure.js.map