import React, { useContext, useEffect, useState } from 'react'
import { myContext } from '../../CartContext';
import LoaderCircular from './../../shared/LoaderCircular'
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom'
import CartItem from './CartItem';
import './cart.css'

const Cart = () => {
    const[loader, setLoader] = useState(true)
    const {lengthArray, products, getTotalPrice} = useContext(myContext);

    useEffect( () =>{
        setTimeout(()=>{
            setLoader(false)
        },2000)
    },[products])

    const componentNoItems = () => {
      return (
        <section className='msg-no-items'>
          <span>
            ¡Tu carrito esta vacío!
          </span>
          
          <Button variant="outlined">
            <Link to={'/'}>Volver al inicio</Link>
          </Button>
        </section>
      )
    }

    const componentWithItems = () => {
      return (
        <section>
          <h4>
            Mis Productos:
          </h4>
          <section className='row-item'>
            <span>
                Nombre del producto
            </span>
            <span>
                Precio
            </span>
            <span>
                Cantidad
            </span>
            <span>
                Subtotal
            </span>
          </section>
          {
            products.map((item, index) => 
              <CartItem key={index} item={item} setLoader={setLoader}/>
            )
          }
          <hr></hr>
          <section className='row-item'>
            {products && <span>Total a pagar: ${getTotalPrice()}</span>}
          </section>
          
        </section>
      )
    }

  return (
    <>
      {loader ? 
      <LoaderCircular/> : 
      <div className='cart-container'>
        {lengthArray > 0 ? componentWithItems() : componentNoItems() }
      </div>}
    </>
    
  )
}

export default Cart