
import { AnimalType } from "./animals/AnimalType.js";
import { Catalogue } from "./abstract/Catalogue.js";
import { AnimalSize } from "./animals/AnimalSize.js";
import { FoodType } from "./food/FoodType.js";

// region Diets

export const HerbivoreFood = Catalogue.create({
    vegetables: new FoodType("Vegetables", 70),
    pellets: new FoodType("Pellets", 55),
    fruits: new FoodType("Fruits", 70),
    seeds: new FoodType("Seeds", 60),
    hay: new FoodType("Hay", 50),
})

export const CarnivoreFood = Catalogue.create({
    insects: new FoodType("Insects", 60),
    worms: new FoodType("Worms", 65),
    meat: new FoodType("Meat", 90),
    fish: new FoodType("Fish", 85),
})

export const OmnivoreFood = Catalogue.create({
    ...HerbivoreFood.items,
    ...CarnivoreFood.items,
})

// endregion

// region Species

export const AnimalSizes = Catalogue.create({
    small: new AnimalSize("Small"),
    medium: new AnimalSize("Medium"),
    large: new AnimalSize("Large"),
    extra: new AnimalSize("Extra"),
})

export const HerbivoreSpecies = Catalogue.create({
    elephant: new AnimalType("Elephant", HerbivoreFood, 100, AnimalSizes.large),
    giraffe: new AnimalType("Giraffe", HerbivoreFood, 80, AnimalSizes.extra),
    zebra: new AnimalType("Zebra", HerbivoreFood, 60, AnimalSizes.medium),
    koala: new AnimalType("Koala", HerbivoreFood, 40, AnimalSizes.small),
    panda: new AnimalType("Panda", HerbivoreFood, 70, AnimalSizes.medium),
    monkey: new AnimalType("Monkey", HerbivoreFood, 50, AnimalSizes.small),
})

export const CarnivoreSpecies = Catalogue.create({
    lion: new AnimalType("Lion", CarnivoreFood, 120, AnimalSizes.medium),
    tiger: new AnimalType("Tiger", CarnivoreFood, 110, AnimalSizes.medium),
    crocodile: new AnimalType("Crocodile", CarnivoreFood, 130, AnimalSizes.large),
})

export const OmnivoreSpecies = Catalogue.create({
    penguin: new AnimalType("Penguin", OmnivoreFood, 30, AnimalSizes.small),
})

// endregion
