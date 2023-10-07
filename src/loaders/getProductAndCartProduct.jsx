import { getStoredCart } from "../utils/fakeDb";

export const productAndCartData = async () => {
    const loaderData = await fetch('products.json');
    const products = await loaderData.json()

    const savedCart = getStoredCart();
    let initialCart = [];
    for (const id in savedCart) {
        const foundProducts = products.find(product => product.id === id)
        const quantity = savedCart[id];
        foundProducts.quantity = quantity;
        initialCart.push(foundProducts);
    }

    return { products, initialCart }
} 