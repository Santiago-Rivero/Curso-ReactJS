import React from 'react'

function ItemDetail({item}) {
  return (
    <div style={{maxWidth: 370, marginLeft: "auto", marginRight: "auto"}}>
        <section>{item.title}</section>
        <section className='item-list-container' style={{margin: 5}}>
            <img src={item.pictureUrl} alt={item.title} style={{maxHeight: 120}}/>
            <span> {item.description} </span>
        </section>
        <section className='item-list-container'>
            <span>
                Precio: Usd {item.price}
            </span>
            <span>
                Stock: {item.stock}
            </span>
        </section>
    </div>
  )
}

export default ItemDetail