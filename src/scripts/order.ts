import { Tproduct } from "./shops"

export type Tclient = {
    firstname: string,
    lastname: string,
    id: string,
}
export const user: Tclient = {
    id:"32d5275b-0bfa-4067-bb98-2f30g7b3441d",
    firstname:"Пётр",
    lastname:"Первый"
}
export type Torder = {
    firstname: string,
    lastname: string,
    phonenumber: string,

}
export type DeliveryType = | {
    street: string,
    house: string,
    entrance?: string,
    floor?: string,
    apartment: number,
    comment?: string
} 
| {
    pointName: string,
    address: string,
}
export interface Delivery {
    dateTime: Date,
    type: DeliveryType
}
export type CartProducts = {
    shopId: string,

} & Tproduct;
export interface Cart{
    products: CartProducts[],
    total: number
}
export interface Order {
    client: Tclient,
    delivery: Delivery,
    cart: Cart
}
export const myAddress: DeliveryType = {
    street: "Орлова 47",
    house: "54/1",
    apartment: 5
}
