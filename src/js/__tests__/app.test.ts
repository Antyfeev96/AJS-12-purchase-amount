import '../app';
import Cart from '../app';

test('new cart should be empty',() => {
    const cart = new Cart();
    expect(cart.items.length).toBe(0);
});

test('products should be added to cart',() => {
    const cart = new Cart();
    cart.add({
        id: 1,
        name: 'banana',
        price: 1000,
    })
    expect(cart.items[0]).toEqual({
        id: 1,
        name: 'banana',
        price: 1000,
    });
});

test('products should be returned',() => {
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

    expect(cart.getAll()).toEqual([{
        id: 1,
        name: 'banana',
        price: 1000,
    },
    {
        id: 2,
        name: 'apple',
        price: 1500,
    }]);
});

test('Products cost should be calculated',() => {
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

    expect(cart.sumCost()).toBe(4000);
});

test('Discount should be applied',() => {
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

    expect(cart.sumLowerCost(20)).toBe(3200);
});

test('Product should be deleted',() => {
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

    cart.deleteProduct(2)

    expect(cart.items.find(item => item.id === 2)).toBeFalsy();
});
