import React, { useEffect, useState } from 'react'
import ButtonEndBuy from '../../../shared/ButtonEndBuy';
import ItemCount from '../../../shared/ItemCount'
import Alert from '@mui/material/Alert';
import './itemDetail.css'

const ItemDetail = ({item}) => {

    const[count, setCount] = useState(0);
    const[addToCart, setAddToCart] = useState(true)
    const[showAlert, setShowAlert] = useState(false);

    useEffect( () => {
        setAddToCart(!addToCart);
        if(!addToCart){
            showAlertFn();
        }
    }, [count])

    const showAlertFn = () => {
        setShowAlert(true)
        setTimeout(()=>{
            setShowAlert(false)
        },2000)
    }

  return (
    <div className='item-container'>
        <h4>{item?.title}</h4>
        <div className='item-content' style={{margin: 5}}>
            <section>
                <img src={item?.pictureUrl} alt="image" style={{maxHeight: 220}}/>
            </section>
            <section className='item-description'>
                <span>{item.description}</span>
                <span>
                    Precio: Usd {item?.price}
                </span>
                <section className='section-btn-add-cart'>
                    {addToCart ? <ButtonEndBuy/> : <ItemCount initial={1} item={item} count={count} setCount={setCount}/>}
                </section>
            </section>
            <section>
            </section>
        </div>
        {showAlert && 
            <Alert variant="outlined" severity="success">
                El producto se agrego correctamente
            </Alert>
        }
    </div>
  )
}

export default ItemDetail