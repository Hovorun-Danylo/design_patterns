export class Random {
    constructor() { }
    static getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    static getRandomElement(collection) {
        const items = [...collection];
        return items[this.getRandomInt(0, items.length - 1)];
    }
    static getRandomCatalogueElement(collection) {
        const items = Object.values(collection.items);
        return items[this.getRandomInt(0, items.length - 1)];
    }
}
//# sourceMappingURL=Random.js.map