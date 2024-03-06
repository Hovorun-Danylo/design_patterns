
import { AnimalType } from "./animals/AnimalType.js";
import { Catalogue } from "./abstract/Catalogue.js";
import { AnimalSize } from "./animals/AnimalSize.js";
import { FoodType } from "./food/FoodType.js";

type InferInnerTypes<T extends Record<string, any>> =
    T extends Record<string, infer U> ? U : never;

// region Diets

const herbivoreFood = {
    vegetables: new FoodType("Vegetables", 70),
    pellets: new FoodType("Pellets", 55),
    fruits: new FoodType("Fruits", 70),
    seeds: new FoodType("Seeds", 60),
    hay: new FoodType("Hay", 50),
}

const carnivoreFood = {
    insects: new FoodType("Insects", 60),
    worms: new FoodType("Worms", 65),
    meat: new FoodType("Meat", 90),
    fish: new FoodType("Fish", 85),
}

const omnivoreFood = {
    ...herbivoreFood,
    ...carnivoreFood,
}

export const HerbivoreDiet = Catalogue.create<
    InferInnerTypes<typeof herbivoreFood>, typeof herbivoreFood
>(herbivoreFood)

export const CarnivoreDiet = Catalogue.create<
    InferInnerTypes<typeof carnivoreFood>, typeof carnivoreFood
>(carnivoreFood)

export const OmnivoreDiet = Catalogue.create<
    InferInnerTypes<typeof omnivoreFood>, typeof omnivoreFood
>(omnivoreFood)

// endregion

// region Species

const animalSizes = {
    small: new AnimalSize("Small"),
    medium: new AnimalSize("Medium"),
    large: new AnimalSize("Large"),
    extra: new AnimalSize("Extra"),
}

export const AnimalSizes = Catalogue.create<
    InferInnerTypes<typeof animalSizes>, typeof animalSizes
>(animalSizes)

const herbivoreSpecies = {
    elephant: new AnimalType("Elephant", HerbivoreDiet, 100, AnimalSizes.large),
    giraffe: new AnimalType("Giraffe", HerbivoreDiet, 80, AnimalSizes.extra),
    zebra: new AnimalType("Zebra", HerbivoreDiet, 60, AnimalSizes.medium),
    koala: new AnimalType("Koala", HerbivoreDiet, 40, AnimalSizes.small),
    panda: new AnimalType("Panda", HerbivoreDiet, 70, AnimalSizes.medium),
    monkey: new AnimalType("Monkey", HerbivoreDiet, 50, AnimalSizes.small),
}

const carnivoreSpecies = {
    lion: new AnimalType("Lion", CarnivoreDiet, 120, AnimalSizes.medium),
    tiger: new AnimalType("Tiger", CarnivoreDiet, 110, AnimalSizes.medium),
    crocodile: new AnimalType("Crocodile", CarnivoreDiet, 130, AnimalSizes.large),
}

const omnivoreSpecies = {
    penguin: new AnimalType("Penguin", OmnivoreDiet, 30, AnimalSizes.small),
}

export const HerbivoreSpecies = Catalogue.create<
    InferInnerTypes<typeof herbivoreSpecies>, typeof herbivoreSpecies
>(herbivoreSpecies)

export const CarnivoreSpecies = Catalogue.create<
    InferInnerTypes<typeof carnivoreSpecies>, typeof carnivoreSpecies
>(carnivoreSpecies)

export const OmnivoreSpecies = Catalogue.create<
    InferInnerTypes<typeof omnivoreSpecies>, typeof omnivoreSpecies
>(omnivoreSpecies)

// endregion
