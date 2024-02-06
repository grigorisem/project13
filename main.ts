import { catalogue } from "./src/scripts/catalogue";
import { CartProducts, Order, user } from "./src/scripts/order";
import {myAddress} from "./src/scripts/order";
const order: Order = {
    client: user,
    delivery: {
        dateTime: new Date(),
        type:myAddress
    },
    cart: {
        products:[],
        total: 0
    }
}
const products: CartProducts[] = [];
for(let index = 0; index<5; index++) {
    const random = Math.floor(Math.random()*50);
    const selectProduct = catalogue.getProducts();
    products.push(...selectProduct);
}
order.cart = {
    products,
    total: products.reduce(
        (sum, currentProduct) => sum + currentProduct.price, 0)
}
//console.log(order);
function getRandomDate() {
    const start = new Date(new Date().getFullYear(), 0, 1);
    const end = new Date(new Date().getFullYear(), 11, 31);
    return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
}

// Генерация случайного имени
function getRandomName() {
    const names = ["Александр", "Екатерина", "Михаил", "Анна", "Иван", "София", "Дмитрий", "Анастасия"];
    return names[Math.floor(Math.random() * names.length)];
}
function getRandomSurname() {
    const surnames = ["Иванов", "Петров", "Сидоров", "Козлов", "Морозов", "Новиков", "Кузнецов", "Смирнов"];
    return surnames[Math.floor(Math.random() * surnames.length)];
}
function getRandomID() {
    const ids =  [
        "d53789b5-3503-4d02-8d19-08b2e5b840c2",
        "ea5f7b9d-3c29-4b6c-8e4b-4400f8572e5f",
        "a920eaf6-3f0c-49bb-8d1f-e07a648d9d0f",
        "d8554db1-5d08-4fc2-84d3-d23f109eaf76",
        "892dd0a2-3409-4b68-b30b-3a94e52c2142",
        "c4bf3184-b21d-4d8a-a2eb-4c1e183b3003",
        "32d5275b-0bfa-4017-bb98-2f30c7b3441d",
        "234f8cb1-7041-4c37-b88b-ec6371050a17",
        "b8611d32-35cd-4c96-8f2f-62c6b81054b5",
        "8b8b51ea-7a47-495d-9a0c-8ee5d1a7ee27"
    ];
    return ids[Math.floor(Math.random() * ids.length)];
}

// Генерация случайного адреса
function getRandomAddress() {
    const addresses = [
        { street: "Ленина", house: "10", apartment: 5 },
        { street: "Пушкина", house: "20", apartment: 3 },
        { street: "Гагарина", house: "15", apartment: 7 },
        { street: "Советская", house: "30", apartment: 2 }
    ];
    return addresses[Math.floor(Math.random() * addresses.length)];
}
const orders: Order[] = [];
for (let i = 0; i < 5; i++) {
    const products: CartProducts[] = [];
    for (let index = 0; index < 5; index++) {
        const random = Math.floor(Math.random() * 50);
        const selectProduct = catalogue.getProducts();
        products.push(...selectProduct);
    }
    const randomAddress = getRandomAddress();
    const order: Order = {
        client: {
            firstname: getRandomName(),
            lastname: getRandomSurname(),
            id: getRandomID()
        },
        delivery: {
            dateTime: getRandomDate(),
            type: {
                street: randomAddress.street,
                house: randomAddress.house,
                apartment: randomAddress.apartment
            }
        },
        cart: {
            products,
            total: products.reduce((sum, currentProduct) => sum + currentProduct.price, 0)
        }
    };
    orders.push(order);
}
const randomOrderIndex = Math.floor(Math.random() * orders.length);
const randomOrder = orders[randomOrderIndex];
console.log(randomOrder);
