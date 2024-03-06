
import { Zoo } from "./zoo/Zoo.js";
import { Warehouse } from "./zoo/Warehouse.js";
import { RandomFoodFactory } from "./food/factory/RandomFoodFactory.js";
import { OmnivoreFood } from "./config.js";

const randomFoodFactory = new RandomFoodFactory(500, 2000)
const warehouse = new Warehouse(randomFoodFactory, OmnivoreFood)

const zoo = new Zoo(warehouse)
zoo.app()
