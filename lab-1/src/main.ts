
import { Zoo } from "./zoo/Zoo.js";
import { Warehouse } from "./zoo/Warehouse.js";
import { RandomFoodFactory } from "./food/factory/RandomFoodFactory.js";
import { OmnivoreFood } from "./config.js";

const randomFoodFactory = new RandomFoodFactory(500, 2000)

const warehouse = new Warehouse(randomFoodFactory, OmnivoreFood)

const fish = randomFoodFactory.create(OmnivoreFood.fish)
const hay = randomFoodFactory.create(OmnivoreFood.hay)

warehouse.addFood(fish)
warehouse.addFood(hay)

const zoo = new Zoo(warehouse)
zoo.app()
