
import {IRestockable, IWarehouse} from "./Warehouse.js";

export class Zoo<T extends string> {
    constructor(private warehouse: IWarehouse<T> & IRestockable<T>) {
        
    }

    app() {
        // const bobik = new Animal("bobik", HerbivoreSpecies.elephant)
        // const bobik2 = new Animal("bobik2", HerbivoreSpecies.elephant)
        //
        // const hay = new Food(HerbivoreDiet.hay, 50)
        // const vegetables = new Food(HerbivoreDiet.vegetables, 100)
        //
        // const enclosure = new Enclosure(2, [ bobik, bobik2 ])
        //
        // const assortment = [ hay, vegetables ]
        // bobik.feedAssortment(assortment)

        // enclosure.showInhabitants()
    }
}
