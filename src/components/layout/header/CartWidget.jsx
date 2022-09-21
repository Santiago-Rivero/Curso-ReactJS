import { useState } from 'react';
import { useContext, useEffect } from 'react'
import wallet from '../../../assets/images/bag.png'
import { myContext } from '../../CartContext'

const CartWidget = () =>{

    const {lengthArray, products} = useContext(myContext);
    const [itemCounter, setItemCounter] = useState(0);
    
    useEffect(() => {

        if(products.length > 0){
            let arrayQuantity =  products.map(item => item.quantity);
            let totalItems = arrayQuantity.reduce((acc,el) => acc + el, 0)
            setItemCounter(totalItems);
          }else{
            setItemCounter(0);
          }
    }, [products, lengthArray])

    return (
        <>
            <section className='cart-widget'>
                {itemCounter > 0 && <span className='span-notificacion'>{itemCounter}</span>}
                <img style={{maxHeight: 35}} src={wallet} alt='wallet'/>
            </section>
        </>
        
    )
}

export default CartWidget