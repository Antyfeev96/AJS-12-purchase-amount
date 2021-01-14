import Product from './Product';

export default class Cart {
    readonly items: Product[] = [];

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
        return this.sumCost() * (1 - percent/100);
    }

    deleteProduct(id: number) : void {
        this.items.splice(this.items.findIndex(item => item.id === id), 1);
    }
}
