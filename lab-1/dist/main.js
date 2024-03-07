import { Zoo } from "./zoo/Zoo.js";
import { Warehouse } from "./zoo/Warehouse.js";
import { RandomFoodFactory } from "./food/factory/RandomFoodFactory.js";
import { HerbivoreSpecies, OmnivoreFood } from "./config.js";
import { Employee } from "./employee/Employee.js";
import { Animal } from "./animals/Animal.js";
import { Food } from "./food/Food.js";
import { Enclosure } from "./enclosure/Enclosure.js";
function testZoo(zoo) {
    const bob = new Employee("Bob", "Animal Curator");
    zoo.register("employee", bob);
    const bobik = new Animal("bobik", HerbivoreSpecies.elephant);
    zoo.register("animal", bobik);
    const bobik2 = new Animal("bobik2", HerbivoreSpecies.elephant);
    zoo.register("animal", bobik2);
    const hay = new Food(OmnivoreFood.hay, 50);
    const vegetables = new Food(OmnivoreFood.vegetables, 100);
    const enclosure = new Enclosure(2, [bobik, bobik2]);
    zoo.register("enclosure", enclosure);
    const assortment = [hay, vegetables];
    bob.feedAnimal(bobik, assortment);
    enclosure.showInhabitants();
    zoo.showInfo("employee");
    zoo.showInfo("animal");
    zoo.showInfo("enclosure");
}
const randomFoodFactory = new RandomFoodFactory(500, 2000);
const warehouse = new Warehouse(randomFoodFactory, OmnivoreFood);
const zoo = new Zoo(warehouse);
testZoo(zoo);
//# sourceMappingURL=main.js.map