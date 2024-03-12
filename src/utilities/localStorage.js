const localStoredCart =()=>{
    const storedCartSting =localStorage.getItem('cart')
    if(storedCartSting){
        return JSON.parse(storedCartSting)
    }
    return []
};
const saveToCart =(cart)=>{
    const cartStringified = JSON.stringify(cart)
    localStorage.setItem('cart',cartStringified)
}
const addToLS = (id)=>{
    const cart = localStoredCart();
    cart.push(id)
    saveToCart(cart)
}

export { addToLS,localStoredCart }