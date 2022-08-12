import React, { createContext, useState } from 'react'

export const myContext = createContext();

const CartContext = ({children}) => {
  const [products, setProducts] = useState([])
  const [lengthArray, setLength] = useState(0)

  const addItem = (item, quantity) => {

    if(isInCart(item.id) !== undefined ){
      let index;
      products.forEach( (prod, i) => {
        if(prod.item.id === item.id) index = i;
      })
      products[index].quantity = quantity;
      setProducts(products);
      setLength(products.length);
      console.log(products)
    }else{
      let obj = {id: item.id, name: item.title, price: item.price, quantity}
      products.push(obj)
      setProducts(products);
      setLength(products.length);
      console.log(products)
    }
    
  }

  const removeItem = (itemId) => {
    console.log('remover items')
  }

  const clearCart = () => {
    console.log('Borrar el carro')
  }

  const isInCart = (id) => {
    if(products){
      return products.find( prod => prod.id === id);
    }
  }


  return (
    <myContext.Provider value={{ addItem, removeItem, clearCart, isInCart, lengthArray}}>{children}</myContext.Provider>
  )
}

export default CartContext