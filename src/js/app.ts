import Product from './Product';

export default class Cart {
    private items: Product[] = [];

    add(item: Product): void {
        this.items.push(item);
    }

    getAll(): Product[] {
        return this.items;
    }

    sumCost(): number {
        let array = 0;
        for (const prop of this.items) {
            array += prop.price;
        }
        return array;
    }

    sumLowerCost(percent: number) : number {
        return this.sumCost() * (1 -percent/100);
    }

    deleteProduct(id: number) : void {
        this.items.splice(this.items.findIndex(item => item.id === id), 1);
    }
}

const cart = new Cart();

cart.add({
    id: 1,
    name: 'banana',
    price: 1000,
})

cart.add({
    id: 2,
    name: 'apple',
    price: 1500,
})

cart.add({
    id: 3,
    name: 'orange',
    price: 1500,
})

console.log(cart.sumCost());
console.log(cart.sumLowerCost(15));
console.log(cart.deleteProduct(2), cart);

