
import { Zoo } from "./zoo/Zoo.js";
import { Warehouse } from "./zoo/Warehouse.js";
import { RandomFoodFactory } from "./food/factory/RandomFoodFactory.js";
import {
    HerbivoreSpecies,
    OmnivoreFood,
    OmnivoreSpecies
} from "./config.js";
import { Employee } from "./employee/Employee.js";
import { Animal } from "./animals/Animal.js";
import { Enclosure } from "./enclosure/Enclosure.js";
import { Random } from "./abstract/Random.js";
import {Console} from "./abstract/Console.js";

function fillZoo<T extends string>(zoo: Zoo<T>) {
    const bob = new Employee("Bob", "Animal Curator")
    zoo.register("employee", bob)

    const ruby = new Animal("Ruby", HerbivoreSpecies.elephant)
    const henry = new Animal("Henry", HerbivoreSpecies.elephant)

    const charlie = new Animal("Charlie", OmnivoreSpecies.penguin);
    [ruby, henry, charlie].forEach(animal => zoo.register("animal", animal))

    const elephantsEnclosure = new Enclosure(2, [ ruby, henry ])
    const penguinsEnclosure = new Enclosure(10, [ charlie ])

    elephantsEnclosure.showInhabitants()
    penguinsEnclosure.showInhabitants();

    [elephantsEnclosure, penguinsEnclosure].forEach(enclosure => zoo.register("enclosure", enclosure))
}

function testZoo<T extends string>(zoo: Zoo<T>) {
    fillZoo(zoo)

    zoo.showInfo("employee")
    zoo.showInfo("animal")
    zoo.showInfo("enclosure")

    const animal = Random.getRandomElement(zoo.animals)
    const employee = Random.getRandomElement(zoo.employees)
    const randomFoodType = Random.getRandomCatalogueElement(animal.diet)
    const availableWeight = zoo.warehouse.getAvailableWeight(randomFoodType)
    const food = zoo.warehouse.pullOut(randomFoodType, Random.getRandomInt(100, availableWeight / 5))

    animal.entertain()
    employee.feedAnimal(animal, [ food ])
    animal.entertain()
    animal.entertain()

    console.log(Console.blockSeparator)

    try {
        const tooMuchFood = zoo.warehouse.pullOut(randomFoodType, availableWeight + 1)
    } catch (e: any) {
        console.log(e.message)
    }
}

const randomFoodFactory = new RandomFoodFactory(500, 2000)
const warehouse = new Warehouse(randomFoodFactory, OmnivoreFood)

const zoo = new Zoo(warehouse)
testZoo(zoo)
