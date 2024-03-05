export class Warehouse {
    constructor(factory, catalogues) {
        this.stock = new Set();
        for (let catalogue of catalogues) {
            for (let foodType of Object.values(catalogue)) {
                let food = factory.create(foodType);
                console.log(food);
            }
        }
    }
}
//# sourceMappingURL=Warehouse.js.map