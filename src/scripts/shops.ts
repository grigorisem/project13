export type Tproduct = {
    id: string, 
    name: string, 
    price: number
};
export type Tshop = {
    id: string,
    name: string,
    city: string,
    address: string,
    products: Tproduct[]
};
