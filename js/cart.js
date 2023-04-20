import products from "../data/stock"

let cart = [];

const prodContainer = document.getElementById('prodDisplay');

prodContainer.addEventListener('click', (e)=>{
  if (e.target.classList.contains('add')){
    validateProdInCart(e.target.id)};
})

validateProdInCart=(prodId) =>{
    const isAlreadyIn = cart.some(product => product.id === prodId);
    isAlreadyIn? updateQuant(product): addToCart(product);
}

updateQuant = (product) =>{
    cart.product.quantity +=1;
}

addToCart = (product)=>{
    cart.push(product)
}
