import { CartProducts } from "./order";
import { Tshop } from "./shops";
import data from "../data/data.json";
export class Catalogue{
    private _data: Tshop[] = [];
    constructor(){
        this._data = data;
    }
    getProducts(): CartProducts[] {
        const list: CartProducts[] = [];
        this._data.forEach(({ products, id }) => {
            products.forEach((product) => {
                list.push({ shopId: id, ...product });
            });
        });
        return list;
    }
}
export const catalogue = new Catalogue();
