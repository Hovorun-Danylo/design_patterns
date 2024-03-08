export class Employee {
    constructor(name, position) {
        this.name = name;
        this.position = position;
    }
    feedAnimal(animal, food) {
        animal.feedAssortment(food);
    }
    toString() {
        return `Employee: ${this.name}: ${this.position}`;
    }
}
//# sourceMappingURL=Employee.js.map