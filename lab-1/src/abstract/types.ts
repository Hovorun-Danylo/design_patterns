
import { IFood } from "../food/Food.js";
import { IFoodType } from "../food/FoodType.js";

export type InferInnerTypes<T extends Record<string, any>> =
    T extends Record<string, infer U> ? U : never;

export type makeFood<T extends string> = { [K in T]: IFood<K> };
export type makeFoodType<T extends string> = { [K in T]: IFoodType<K> };

export type getFood<T extends string> = makeFood<T>[keyof makeFood<T>];
export type getFoodTypes<T extends string> = makeFoodType<T>[keyof makeFoodType<T>];
