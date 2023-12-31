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

//  get collect shopping cart data from localstorage 
const getStoredCart = () => {
    let shoppingCart = {};
    const storedCart = localStorage.getItem("shopping-cart");
    if (storedCart) {
        shoppingCart = JSON.parse(storedCart)
    }
    return shoppingCart;
}

const removeFromDb = (id) => {
    const storedCart = localStorage.getItem("shopping-cart");
    if (storedCart) {
        const removeCart = JSON.parse(storedCart)
        if (id in removeCart) {
            delete removeCart[id]
            localStorage.setItem("shopping-cart", JSON.stringify(removeCart))
        }
    }
}

const deleteShoppinCart = () => {
    localStorage.removeItem("shopping-cart")
}


export { adToDb, getStoredCart, removeFromDb, deleteShoppinCart }