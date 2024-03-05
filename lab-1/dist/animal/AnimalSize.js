export class AnimalSize {
    constructor(name, size) {
        this.name = name;
        this.size = size;
    }
    toString() {
        return this.name;
    }
    equals(other) {
        return this.name === other.name && this.size === other.size;
    }
    valueOf() {
        return this.size;
    }
}
//# sourceMappingURL=AnimalSize.js.map