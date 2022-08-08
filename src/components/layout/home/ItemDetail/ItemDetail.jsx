import React from 'react'
import './itemDetail.css'
const ItemDetail = ({item}) => {
  return (
    <div className='item-container'>
        <section>{item?.title}</section>
        <section className='item-content' style={{margin: 5}}>
            <img src={item?.pictureUrl} alt="image" style={{maxHeight: 120}}/>
            <span>Descripcion: {item.description}</span>
        </section>
        <section className='item-content'>
            <span>
                Precio: Usd {item?.price}
            </span>
            <span>
                Stock: {item?.stock}
            </span>
        </section>
    </div>
  )
}

export default ItemDetail