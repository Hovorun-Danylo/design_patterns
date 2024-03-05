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
        const thisValues = Object.values(this);
        const otherValues = Object.values(other);
        if (thisValues.length !== otherValues.length) {
            return false;
        }
        return thisValues.every((value, i) => value.equals(otherValues[i]));
    }
    static create(itemType, items) {
        return new Catalogue(items);
    }
}
//# sourceMappingURL=Catalogue.js.map