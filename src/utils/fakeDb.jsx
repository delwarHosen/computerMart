const adToDb = (id) => {
    let shoppingCart = {};

    // get the shopping cart from the local stoarage
    const storedCart = localStorage.getItem("shopping-cart");
    if (storedCart) {
        shoppingCart = JSON.parse(storedCart)
    }

    // add quantity
    const quantity = shoppingCart[id]
    if (quantity) {
        const newQuantity = quantity + 1;
        shoppingCart[id] = newQuantity
    }
    else {
        shoppingCart[id] = 1
    }
    localStorage.setItem("shopping-cart", JSON.stringify(shoppingCart))
}


export { adToDb }