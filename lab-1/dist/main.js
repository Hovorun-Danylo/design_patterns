import { Zoo } from "./zoo/Zoo.js";
import { Warehouse } from "./zoo/Warehouse.js";
import { RandomFoodFactory } from "./food/factory/RandomFoodFactory.js";
import { CarnivoreDiet, HerbivoreDiet } from "./config.js";
const randomFoodFactory = new RandomFoodFactory(500, 2000);
const warehouse = new Warehouse(randomFoodFactory, [
    HerbivoreDiet, CarnivoreDiet
]);
const zoo = new Zoo(warehouse);
zoo.app();
//# sourceMappingURL=main.js.map