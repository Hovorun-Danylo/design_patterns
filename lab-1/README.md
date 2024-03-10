
# Programming principles used in code

## SRP (single responsibility principle)

> A class should have one, and only one, reason to change.

Each class has only one responsibility:
for example, type classes like [AnimalType](src/animals/AnimalType.ts) or entity classes like [Animal](src/animals/Animal.ts)
are only responsible for the piece of data or/and logic they're meant to represent.
Another example is [Warehouse](src/zoo/Warehouse.ts), it has only methods related to
working with concrete warehouse and the food contained in it.

## OCP (open-closed principle)

> You should be able to extend a class’s behavior without modifying it.

The whole program using interfaces, so to add any new behavior you would have to
simply create a new class implementing some interface and pass it further thanks to
dependency injection. The most obvious example of it would be [config](src/config.ts)
as client code can freely create new animal/food/etc. types and simply pass it further.

## LSP (liskov substitution principle)

> Derived classes (subclasses) can be substituted for their base classes 
> (superclasses) without affecting the correctness of the program.

I don't have that principle directly, as it relies on inheritance, which is
*inherently* bad in **most** cases, although I think that this principle makes us
use *upcast*, not necessarily upcast to **classes**, which is broadly present in
my code, as described in [OCP](README.md#ocp-open-closed-principle) parapraph already

## ISP (interface segregation principle)

> Make fine-grained interfaces that are client-specific.
> Clients should not be forced to implement interfaces they do not use.

All the interfaces have only the methods/properties they **really** need,
which lets avoid unnecessary big interfaces bloated with unused methods,
the most obvious example would be [Animal](src/animals/Animal.ts) class which implements
4 interfaces at once. But overall there are **[a lot](src/interfaces)** of them.

## DIP (dependency inversion principle)

> Depend on abstractions, not on concretions.

Well, once again, quite everything is dependent on interfaces(so abstractions)
and not concrete implementations, as was mentioned in [OCP](README.md#ocp-open-closed-principle).
The most obvious example would be [Zoo](src/zoo/Zoo.ts) class and how its
being created:
```ts
const randomFoodFactory = new RandomFoodFactory(500, 2000)
const warehouse = new Warehouse(randomFoodFactory, OmnivoreFood)

const zoo = new Zoo(warehouse)
```

## Fail Fast

Every function fails as fast as it could:
```ts
pullOut<T extends L>(consumableType: IFoodType<T>, weightInGrams: number): Food<T> {
    if (weightInGrams <= 0) {
        throw Error("Pulling weight can't be <= 0!")
    }
    
    const availableWeight = this.getAvailableWeight(consumableType)
    
    if (availableWeight < weightInGrams) {
        throw Error(`Not enough ${consumableType} in stock!`)
    }
    
    this.stock.get(consumableType)!.weightInGrams -= weightInGrams
    return new Food(consumableType, weightInGrams)
}
```
```ts
set hunger(value: number) {
    if (value < 0)
        throw Error("Hunger can't be negative")

    this._hunger = value
}
```
etc.

## Program to Interfaces not Implementations
### + Composition over inheritance

And once again - **everything** uses interfaces, a lot of principles lead to
very similar code(OCP, DIP, dependency injection pattern, program to interfaces,
composition on its own), besides [Zoo](README.md/#dip-dependency-inversion-principle)
construction code good example of composition
would be [Animal](src/config.ts)(and similar classes) once again, because they
are *composed* of corresponding type([AnimalType](src/animals/AnimalType.ts), [FoodType](src/food/FoodType.ts) etc.)