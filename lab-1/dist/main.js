import { Enclosure } from "./enclosure/Enclosure.js";
import { Catalogue } from "./abstract/Catalogue.js";
import { AnimalType } from "./animals/AnimalType.js";
import { AnimalSize } from "./animals/AnimalSize.js";
import { FoodType } from "./food/FoodType.js";
import { Animal } from "./animals/Animal.js";
import { Food } from "./food/Food.js";
// region Config
// region Diets
const HerbivoreDiet = Catalogue.create((FoodType), {
    vegetables: new FoodType("Vegetables", 70),
    pellets: new FoodType("Pellets", 55),
    fruits: new FoodType("Fruits", 70),
    seeds: new FoodType("Seeds", 60),
    hay: new FoodType("Hay", 50),
});
const CarnivoreDiet = Catalogue.create((FoodType), {
    insects: new FoodType("Insects", 60),
    worms: new FoodType("Worms", 65),
    meat: new FoodType("Meat", 90),
    fish: new FoodType("Fish", 85),
});
const OmnivoreDiet = Catalogue.create((FoodType), {
    ...HerbivoreDiet.items,
    ...CarnivoreDiet.items
});
// endregion
// region Species
const AnimalSizes = Catalogue.create((AnimalSize), {
    small: new AnimalSize("Small", 0),
    medium: new AnimalSize("Medium", 1),
    large: new AnimalSize("Large", 2),
    extra: new AnimalSize("Extra", 3),
});
const HerbivoreSpecies = Catalogue.create((AnimalType), {
    elephant: new AnimalType("Elephant", HerbivoreDiet, 100, AnimalSizes.large),
    giraffe: new AnimalType("Giraffe", HerbivoreDiet, 80, AnimalSizes.extra),
    zebra: new AnimalType("Zebra", HerbivoreDiet, 60, AnimalSizes.medium),
    koala: new AnimalType("Koala", HerbivoreDiet, 40, AnimalSizes.small),
    panda: new AnimalType("Panda", HerbivoreDiet, 70, AnimalSizes.medium),
    monkey: new AnimalType("Monkey", HerbivoreDiet, 50, AnimalSizes.small),
});
const CarnivoreSpecies = Catalogue.create((AnimalType), {
    lion: new AnimalType("Lion", CarnivoreDiet, 120, AnimalSizes.medium),
    tiger: new AnimalType("Tiger", CarnivoreDiet, 110, AnimalSizes.medium),
    crocodile: new AnimalType("Crocodile", CarnivoreDiet, 130, AnimalSizes.large),
});
const OmnivoreSpecies = Catalogue.create((AnimalType), {
    penguin: new AnimalType("Penguin", OmnivoreDiet, 30, AnimalSizes.small),
});
// endregion
// endregion
class Zoo {
    app() {
        const bobik = new Animal("bobik", HerbivoreSpecies.elephant);
        const bobik2 = new Animal("bobik2", HerbivoreSpecies.elephant);
        const hay = new Food(HerbivoreDiet.hay, 50);
        const vegetables = new Food(HerbivoreDiet.vegetables, 100);
        const enclosure = new Enclosure(2, [bobik, bobik2]);
        const assortment = [hay, vegetables];
        bobik.feedAssortment(assortment);
        enclosure.showInhabitants();
    }
}
const zoo = new Zoo();
zoo.app();
//# sourceMappingURL=main.js.map