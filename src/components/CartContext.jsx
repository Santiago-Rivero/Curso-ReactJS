import React, { createContext, useState } from 'react'

export const myContext = createContext();

const CartContext = ({children}) => {
  const [products, setProducts] = useState([])
  const [lengthArray, setLength] = useState(0)
  const [total, setTotal] = useState(0);

  const addItem = (item, quantity) => {

    if(isInCart(item.id) !== undefined ){
      let index;
      products.forEach( (prod, i) => {
        if(prod.id === item.id) index = i;
      })
      products[index].quantity = quantity;
      setProducts(products);
      counterItems();
    }else{
      let obj = {id: item.id, name: item.title, price: item.price, quantity}
      products.push(obj)
      setProducts(products);
      counterItems();
    }
    
  }

  const removeItem = (itemId) => {
    let newProducts = products.filter( item => item.id !== itemId);
    if( newProducts.length != 0){
      setProducts(newProducts);
    }else{
      setProducts([]);
      setLength(0);
    }
  }

  const clearCart = () => {
    console.log('Borrar el carro')
  }

  const isInCart = (id) => {
    if(products){
      return products.find( prod => prod.id == id);
    }
  }

  const counterItems = () => {
    if(products.length != 0){
      let arrayQuantity =  products.map(item => item.quantity);
      let totalItems = arrayQuantity.reduce((acc,el) => acc + el, 0)
      setLength(totalItems);
    }else{
      setLength(0);
    }
  }

  const getTotalPrice = () => {
    let priceProducts = products.map(item => item.price * item.quantity);

    let totalPrice = priceProducts.reduce((acc, el) => acc + el, 0)
  
    return `${(totalPrice).toFixed(2)}`;
    
  }

  return (
    <myContext.Provider value={{ products, addItem, removeItem, clearCart, isInCart, getTotalPrice, lengthArray}}>{children}</myContext.Provider>
  )
}

export default CartContext