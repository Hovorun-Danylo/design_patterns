export class Catalogue {
    constructor(_items) {
        this._items = _items;
        Object.defineProperty(this, "_items", {
            get: () => _items,
            enumerable: false
        });
        for (const key in this.items) {
            Object.defineProperty(this, key, {
                get: () => this.items[key],
                enumerable: true,
            });
        }
    }
    get items() { return this._items; }
    contains(item) {
        return Object.values(this.items).some(i => item.equals(i));
    }
    equals(other) {
        const thisValues = Object.values(this.items);
        const otherValues = Object.values(other.items);
        if (thisValues.length !== otherValues.length) {
            return false;
        }
        return thisValues.every((value, i) => value.equals(otherValues[i]));
    }
    static innerCreate(items) {
        return new Catalogue(items);
    }
    static create(items) {
        return this.innerCreate(items);
    }
}
//# sourceMappingURL=Catalogue.js.map